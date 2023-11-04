import { Events } from "discord.js"
import logger from "./logger/logger.js"
import { checkMessageContent } from "./check-message-content.js"

const eventsMap = {
  [Events.ClientReady]: onReady,
  [Events.MessageCreate]: onMessageCreate,
}

function onReady (client) {
  logger.info(`Bot connected as ${client.user.tag}`)
}

async function onMessageCreate (message) {
  try {
    await checkMessageContent(message)
  } catch (err) {
    logger.error(err.message ?? "unknown error")
  }
}

export function loadEvents (client) {
  for (const [event, cb] of Object.entries(eventsMap)) {
    client.on(event, cb)
  }
}