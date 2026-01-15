


export default function updateVitalityPool(currentCombatant) {
  console.log(`attempting to update vitality pool`)

  if (currentCombatant?.isOwner || currentCombatant?.actor?.hasPlayerOwner) {
		console.log(`player turn started for ${currentCombatant.name}`);

    let player = currentCombatant.actor;
    
    // ui.notifications.info("on combat turn hook -- 2 - inside if ");

		if (player) {
			let level = player.level;
			let playerClass = player.class.name;
			let vitalityNetwork = player.system.resources.vitalityNetwork;

			let newValue = vitalityNetwork.value;
      if (level >= 19) {
        // ui.notifications.info("on combat turn hook -- 3 - >= 19");
				newValue += 8;
			}
      else if (level >= 15) {
        // ui.notifications.info("on combat turn hook -- 3 - >= 15");
				newValue += 6;
			}
      else {
        // ui.notifications.info("on combat turn hook -- 3 - >= 1");
				newValue += 4;
			}

      if (newValue > vitalityNetwork.max) {
        // ui.notifications.info("on combat turn hook -- 3d - new value > network max");
				newValue = vitalityNetwork.max;
			}

			// let newValue = player.system.resources.vitalityNetwork.value += 1;
			player.updateResource('vitalityNetwork', newValue)
			
			console.log(player.system.resources.vitalityNetwork.value);
		}
	}
}