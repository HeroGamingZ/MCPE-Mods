function ModPE.setFoodItem(462, taco, 3, Taco, 16);
function ModPE.setFoodItem(463, hamburger, 5, Hamburger, 4);
function ModPE.setFoodItem(462, hotdog, 3, Hotdog, 16);
//Burger recipe
function Item.addShapedRecipe(462, 4, 0, [
	" x ",
	"azy",
	" x "
	], ["x", 297, 0, "a", 351, 0, "z", 364, 0, "y", 351, 0])

function newLevel() {
	clientMessage(ChatColor.YELLOW+"Fast Food mod created by @HeroGamingZ");
}
function procCmd(comand){
	var cmd = command.split("");
	if(cmd[0] == "recipe"){
		clientMessage(ChatColor.GOLD+"Food Recipes:");
		clientMessage(ChatColor.GREEN+"Taco:");
		clientMessage(ChatColor.GREEN+"Hamburger:");
		clientMessage(ChatColor.GREEN+"Hotdog:");
	}
}