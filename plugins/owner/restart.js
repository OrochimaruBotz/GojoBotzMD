exports.run = {
   usage: ['restart'],
   async: async (m, {
      client
   }) => {
      await client.reply(m.chat, Func.texted('bold', 'Restarting . . .'), m).then(async () => {
         await git.save()
         process.send('reset')
      })
   },
   owner: true
}