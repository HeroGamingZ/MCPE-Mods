ModPE.setFoodItem (483, "hamburger", 0, 2, "Hamburger", 4);
Item.addShapedRecipe(483,1,0, [
 " x ",
 "azy",
 " x "
 ],
 ["x",297,0,"a",351,0,"z",364,0,"y",351,0]);

function newLevel() {
 clientMessage(ChatColor.YELLOW+"MoreFood mod created by " ChatColor.BLUE+"@HeroGamingZ");
}
function procCmd(command){
 var cmd = command.split("");
 if(cmd[0] == "recipe"){
  clientMessage(ChatColor.BLUE+"Food Recipes:");
  clientMessage(ChatColor.GREEN+"Hamburger:");
 }
}
