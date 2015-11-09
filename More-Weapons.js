//Copyright (c) 2015, HeroGamingZ - HyperCraft Network

//Inventory
Player.addItemCreativeInv(841, 1, 0);
Player.addItemCreativeInv(842, 1, 0);
addItemInventory(841,1);
addItemInventory(842,1);
//Items
ModPE.setItem(841, "katana", 0, "The Katana", 1);
ModPE.setItem(842, "lava_sword", 0, "Lava Sword", 1);
//Craft Recipes
Item.addCraftRecipe(841, 1, 0 [352, 1, 0, 49, 1, 0, 265, 1, 0]);
Item.addCraftRecipe(842, 1, 0 [352, 1, 0, 325, 1, 0, 266, 1, 0]);
//Sword Powers
if (getCarriedItem() == 841) {
    Entity.setHealth(victim, 4);
}
if (getCarriedItem() == 842) {
    Entity.setFireTicks(victim, 10);
}