# MUL-T
A multi-purpose Discord bot that gives users various tools for use in botting, server moderation or easier access to relevant information.

## Commands
All commands must be prefixed with the `$` symbol for the bot to interpret it.

#### Shopify
- Fetches a list of the variants and sizes for a given product on any Shopify-based webstore and returns a webhook with the information necessary to plug into an automated checkout bot. ex: `$shopify https://kith.com/collections/new-arrivals/products/hmba014f20jer0056020`

#### Var (Variants)
- Identical to the previous `Shopify` command, however this one only returns the variants rather than variants + sizes in a webhook. Some bots allow mass task creation when inputting multiple variants, this removes the need to delete all of the size information manually. ex: `$var https://kith.com/collections/new-arrivals/products/hmba014f20jer0056020`

#### Covid
- Fetches latest COVID-19 statistics from the CDC. The bot automatically fetches once every 30 minutes and caches the data to a JSON file to prevent pinging the CDC site too often. This command also allows for arguments, such as state or country, if you only want statistics for specific areas. By default this command returns statistics for the entire USA if no arguement is provided. ex: `$covid tx`

#### Delete
- Bulk deletes up to 100 of the latest messages in the current channel. Per Discord limitation, messages older than 14 days old may not be deleted using this function. ex: `$delete 69`

#### Points
- Returns the user's current accumulated points in the server. ex: `$points`

#### Bae
- Returns a list of "bae" sizes so you may easily copy into your bot for quicker task creation. ex: `$bae`

#### Server
- Returns the current amount of users in the server. ex: `$server`

## Points system
Points are automatically calculated and increased with any posts a user makes within the server. Each post is worth 1 point with the cost for level ups multiplying by 1.75 every level, beginning at 10 points. 
