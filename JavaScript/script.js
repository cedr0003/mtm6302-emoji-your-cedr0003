const emojis = [
	"1F600", "1F601", "1F602", "1F603", "1F604", "1F605", "1F606", "1F607", "1F608", "1F609", 
	"1F60A", "1F60B", "1F60C", "1F60D", "1F60E", "1F60F", "1F610", "1F611", "1F612", "1F613", 
	"1F614", "1F615", "1F616", "1F617", "1F618", "1F619", "1F61A", "1F61B", "1F61C", "1F61D", 
	"1F61E", "1F61F", "1F620", "1F621", "1F622", "1F623", "1F624", "1F625", "1F626", "1F627", 
	"1F628", "1F629", "1F62A", "1F62B", "1F62C", "1F62D", "1F62E", "1F62F", "1F630", "1F631"
];
const grid = document.querySelector('.grid');
emojis.forEach(hex => {
	const emoji = String.fromCodePoint(parseInt(hex, 16));
	const item = document.createElement('div');
	item.classList.add('item');
	item.innerText = emoji + '\n' + hex;
	grid.appendChild(item);
});