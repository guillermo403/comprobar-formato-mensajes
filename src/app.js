import { Client, GatewayIntentBits } from "discord.js"
import { loadEvents } from "./lib/load-events.js"
import dotenv from "dotenv"

export function init () {
  dotenv.config()

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
  })

  loadEvents(client)

  client.login(process.env.BOT_TOKEN)
}