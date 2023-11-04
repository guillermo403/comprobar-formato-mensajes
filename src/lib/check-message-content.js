import logger from "./logger/logger.js"
import { channels } from "./channels.js"
const channelIds = Object.keys(channels)

export const checkMessageContent = async (message) => {
  if (!channelIds.includes(message.channel.id)) return

  const { content: messageContent } = message
  const regex = channels[message.channel.id].regex

  const matchRegex = (text) => regex.test(text)

  if (!matchRegex(messageContent)) {
    await message.delete()
    logger.info(`Message deleted: ${message.author?.tag ?? ''} => ${messageContent}`)
  }
}