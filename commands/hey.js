// SlashCommandBuilder という部品を discord.js からインポートしています。
// これにより、スラッシュコマンドを簡単に構築できます。
const { SlashCommandBuilder } = require('discord.js');

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
module.exports = {
	data: new SlashCommandBuilder()
		.setName('sc')
		.setDescription('コマンドに反応してbotがスレッドを立ち上げます').addStringOption(option => option.setName('name').setDescription('スレッド名を入力してください。')),
	execute: async function(interaction) {
			const thread = await interaction.channel.threads.create({
				name: `${interaction.options.getString('name')}`,
				autoArchiveDuration: 60,
				reason: 'Needed a separate thread for food',
			});
			await interaction.reply({ content: `${thread.name}が立ちました。`, ephemeral: true });
	},
};

// module.exportsの補足
// キー・バリューの連想配列のような形で構成されています。
//
// module.exports = {
//    キー: バリュー,
//    キー: バリュー,
// };
//