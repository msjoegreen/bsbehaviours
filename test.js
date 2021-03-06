var modifier = 0;
var showHostile = 0;

var holdResult = {
  result: 'HOLD',
  descr: 'Do nothing.',
};

var advanceResult = {
  result: 'ADVANCE',
  descr:
    'Move towards the closest explorer. Then attack the closest explorer that is in range of and visible to this hostile.',
};

var onslaughtResult = {
  result: 'ONSLAUGHT',
  descr:
    'Attack the closest explorer that is in range of and visible to this hostile. Then attack the closest explorer that is in range of and visible to this hostile.(This may be a different target if the first explorer is taken out of action or another explorer is equally close).',
};

var sneakResult = {
  result: 'SNEAK',
  descr:
    'Make a move as close as possible to an explorer without entering a hex that is visible to any explorer.',
};

var chargeResult = {
  result: 'CHARGE',
  descr:
    'Move towards the closest explorer. Then attack an explorer that is adjacent and visible to this hostile. If there are no explorers adjacent and visible to this hostile, move towards the closest explorer a second time.',
};

var aimResult = {
  result: 'AIM',
  descr:
    'Attack the furthest explorer that is in range of and visible to this hostile. That attack ignores cover.',
};

var fallbackResult = {
  result: 'FALL BACK',
  descr:
    "Double this hostile's Move value when they take this action. If this hostile can make a move that ends in a hex that is not visible to any explorers, they do so. If they cannot, they attack the closest explorer that is in range and visible to this hostile.",
};

var furyResult = {
  result: 'FURY',
  descr:
    'Take an Onslaught action. Re-roll failed attack rolls for that action.',
};

var rushResult = {
  result: 'RUSH',
  descr: 'Move towards the closest explorer. Then take a Charge action.',
};

var overchargeResult = {
  result: 'OVERCHARGE',
  descr:
    'Make an overcharged Plasma Pistol attack against the closest explorer that is in range of and visible to Obsidius Mallex.',
};

var rechargeResult = {
  result: 'RECHARGE',
  descr:
    'Remove a wound counter fromthe Negavolt Cultist. If the Negavolt Cultist does not have a wound counter, treat this result as an Advance result instead.',
};

var alertResult = {
  result: 'ALERT',
  descr:
    'Increase the threat level by 1 and then take an Onslaught action. If the threat level is 3, take an Onslaught action and re-roll failed attack rolls for that action instead.',
};

var pounceResult = {
  result: 'POUNCE',
  descr:
    'If there is an explorer adjacent and visible to this Ur-Ghul, take an Onslaught action. Otherwise, take a Charge action. Re-roll failed attack rolls for whichever action is taken.',
};

var disruptResult = {
  result: 'DISRUPT',
  descr:
    'One unspent activation or destiny dice chosen by the hostile player is discarded and cannot be spent this turn. If no unspent activation or destiny dice are available, one explorer chosen by the hostile player suffers a wound.',
};

var regenerateResult = {
  result: 'REGENERATE',
  descr:
    'Remove a wound counter from the Rogue Psyker. If the Rogue Psyker does not have a wound counter, treat this result as a Disrupt result instead.',
};

var empowerResult = {
  result: 'EMPOWER',
  descr:
    'Place the empowered marker beside the Rogue Psyker. If the Rogue Psyker is already empowered, treat this result as a Disrupt instead. The Rogue Psyker remains empowered until they suffer a wound or grievous wound.',
};

var annihilateResult = {
  result: 'ANNIHILATE',
  descr:
    'Place the empowered marker beside the Rogue Psyker. Then attack an explorer that is adjacent and visible to this hostile. Re-roll failed attack rolls for that attack. The Rogue Psyker remains empowered until they suffer a wound or grievous wound.',
};

var rapidfireResult = {
  result: 'RAPID FIRE',
  descr:
    'Take an Onslaught action. Re-roll failed attack rolls for that action.',
};

var swipeResult = {
  result: 'SWIPE',
  descr:
    'Make an attack against each explorer that is adjacent and visible to the Ambull.',
};

var tunnelResult = {
  result: 'TUNNEL',
  descr:
    "Remove the Ambull from the battlefield and place the Ambull location marker on the hex it was removed from - any remaining actions during this activation are lost. The next time the initiative card for the Ambull is reached, do not roll on the behaviour table for the Ambull's first action. Instead, the Ambull is placed in a hex as close as possible to the explorer that is cloest to the Ambull location marker. Once the Ambull has been placed, remove the Ambull location marker and roll for the Ambull's second action as normal. ",
};

var borewyrmTunnelResult = {
  result: 'TUNNEL',
  descr:
    'Remove the Borewyrm Infestation from the board and place it in the same hex as the discovery marker that is furthest from any explorers or other hostiles(other than the Ambull or any other Borewyrm Infestations). If this is not possible, treat this result as a Sneak result instead.',
};

var consumeResult = {
  result: 'CONSUME',
  descr:
    "Double this hostile's Move value when they take this action. Move the Borewyrm Infestation towards the nearest discovery marker, then remove any wound counters next to this Borewyrm Infestation. If there are no discovery markers or the only discovery markers on the board are showing the <?> side, treat this result as a Sneak result instead.",
};

var executeTheWeakResult = {
  result: 'EXECUTE THE WEAK',
  descr:
    "If there are no Traitor Guardsman hostiles visible to the Traitor Commissar, treat this result as Charge instead. Otherwise, the nearest Traitor Guardsman that is visible to the Traitor Commissar is slain. Place the motivation marker in the same hex as the slain Traitor Guardsman before it is removed. Add 2 to behaviour rolls (to a maximum of 20) for all Traitor Guardsman hostiles within 6 hexes of the motivation marker. Remove the motivation marker at the start of the Traitor Commissar's next activation.",
};

var guardResult = {
  result: 'GUARD',
  descr: 'Move the Chaos Ogryn towards the Traitor Commissar.',
};

var crushResult = {
  result: 'CRUSH',
  descr:
    'Move towards the closest explorer. Then attack an explorer that is adjacent and visible to this hostile. If there are no explorers adjacent and visible to this hostile, move towards the closest explorer a second time. If the Chaos Ogryn ends either of these moves adjacent to any explorers, those explorers are stunned.',
};

var lurchResult = {
  result: 'LURCH',
  descr: 'Take a Charge action. Re-roll failed attack rolls for that action.',
};

var virulentBiteResult = {
  result: 'VIRULENT BITE',
  descr:
    'Take an Onslaught action. Re-roll failed attack rolls for that action.',
};

var plagueAnnihilateResult = {
  result: 'ANNIHILATE',
  descr:
    'Take an Onslaught action. Hostiles with a  Boltgun re-roll failed attack rolls for this action. hostiles with a Plasma Gun do not make an Onslaught action; instead, make an overcharged Plasma Gun attack against the closest explorer that is in range and visible to that hostile.',
};

var steadyAdvanceResult = {
  result: 'STEADY ADVANCE',
  descr:
    'Move towards the closest explorer. Then attack the furthest explorer that is in range of and visible to this hostile(even if there is an adjacent explorer). That attack ignores cover.',
};

var ritesOfPossessionResult = {
  result: 'RITES OF POSSESSION',
  descr:
    'One unspent activation or destiny dice chosen by the hostile player (or the leader, if there is no hostile player) is discarded and cannot be spent this turn. If no unspent activation or destiny dice are available, one explorer chosen by the hostile player suffers a grievous wound.',
};

var warpfireResult = {
  result: 'WARPFIRE BRAZIERS',
  descr: 'All adjacent explorers suffer 1 grievous wound.',
};

var warpsurgeResult = {
  result: 'WARPSURGE',
  descr:
    'Remove a wound counter from the Greater Possessed. If the Greater Possessed does not have a wound counter, treat this result as a Charge result instead.',
};

var overwhelmResult = {
  result: 'OVERWHELM',
  descr:
    'Move towards the cloest explorer that has another Cultist hostile adjacent to it. Then attack an explorer that is adjacent and visible to this hostile; if there are no explorers adjacent and visible to this hostile, move towards the cloest explorer that has another Cultist hostile adjacent to it a second time. If there are no explorers with another Cultist hostile adjacent to them, treat this result as Charge instead.',
};

var fullautoResult = {
  result: 'FULL-AUTO',
  descr:
    'Make an attack roll against each explorer adjacent and visible to this hostile. If only one explorer is adjacent, treat this as Onslaught instead.',
};

var firestormResult = {
  result: 'FIRESTORM',
  descr:
    'Place a firestorm marker beside the Cultist Firebrand. While a firestorm marker is beside this Cultist Firebrand, each time an explorer moves into a hex that is within 2 hexes of them, the Cultist Firebrand makes a Hellfire Torch attack against that explorer. After that attack is resolved, that explorer can continue to move. Remove the firestorm marker the next time the Cultist Firebrand is activated.',
};

var allShallBurnResult = {
  result: 'ALL SHALL BURN',
  descr:
    'Make a □ attack roll against each explorer and hostile within two hexes of and visible to the Cultist Firebrand.',
};

var scuttleResult = {
  result: 'SCUTTLE',
  descr:
    'Move towards the closest explorer. Then attack the closest explorer that is in range of and visible to this hostile. If there is no explorer in range and visible to this hostile, move towards the closest explorer a second time, then attack the closest explorer that is in range and visible to this hostile.',
};

var hoverdronesResult = {
  result: 'HOVER DRONES',
  descr:
    'If there is already a Hover Drones token in the same hex as this hostile, treat this as a Charge result instead. Otherwise, place a Hover Drones token in the same hex as this hostile. This token moves with this hostile - at the end of the hostiles move place the Hover Drones token in the same hex as this hostile. When this hostile is the target of an explorer that is 2 or more hexes away, if there is a Hover Drones token in that hex, the attack has no effect and you remove the Hover Drones token.',
};

var commandResult = {
  result: 'COMMAND',
  descr:
    "If there are any Awakened Spindle Drones on the battlefield, activate each Awakened Spindle Drone immediately after this hostile's activation. This is in addition to the Awakened Spindle Drones' activations this phase. If there are no Awakened Spindle Drones on the battlefield, treat this as an Advance result instead.",
};

var observeResult = {
  result: 'OBSERVE',
  descr:
    "Double this hostile's Move value when they take this action. Move towards the closest explorer.",
};

var steadAdvanceResult2 = {
  result: 'STEADY ADVANCE',
  descr:
    "Double this hostile's Move value when they take this action. Move towards the cloest explorer, then attack the closest explorer that is in range of and visible to the Archivist.",
};

var almightyBlowResult = {
  result: 'ALMIGHTY BLOW',
  descr:
    'Make one Eradicator Glove weapon action against one visible, adjacent explorer. When rolling for this attack action, resolve each result on the action dice one at a time, resolving any successes before any critical successes.',
};

var eventKeySet = [
  //Hidden Vault EventHV
  { quest: 'EventHV', eventRoll: [1], eventResultKey: 'AllIsDust1' },
  { quest: 'EventHV', eventRoll: [2, 3], eventResultKey: 'UnfulfilledDestiny' },
  { quest: 'EventHV', eventRoll: [4, 5, 6], eventResultKey: 'NotDeadYet' },
  {
    quest: 'EventHV',
    eventRoll: [7, 8, 9, 10],
    eventResultKey: 'ChangingConditions',
  },
  {
    quest: 'EventHV',
    eventRoll: [11, 12, 13, 14],
    eventResultKey: 'EscapeChamber',
  },
  { quest: 'EventHV', eventRoll: [15, 16, 17], eventResultKey: 'Inspiration' },
  { quest: 'EventHV', eventRoll: [18, 19], eventResultKey: 'HeroicEffort' },
  { quest: 'EventHV', eventRoll: [20], eventResultKey: 'LuckyFind' },

  //Black Shrines EventBS
  { quest: 'EventBS', eventRoll: [1], eventResultKey: 'AllIsDust2' },
  { quest: 'EventBS', eventRoll: [2, 3], eventResultKey: 'UnfulfilledDestiny' },
  { quest: 'EventBS', eventRoll: [4, 5, 6], eventResultKey: 'NotDeadYet' },
  {
    quest: 'EventBS',
    eventRoll: [7, 8, 9, 10],
    eventResultKey: 'ChangingConditions',
  },
  {
    quest: 'EventBS',
    eventRoll: [11, 12, 13, 14],
    eventResultKey: 'AlarmTripped',
  },
  { quest: 'EventBS', eventRoll: [15, 16, 17], eventResultKey: 'Inspiration' },
  { quest: 'EventBS', eventRoll: [18, 19], eventResultKey: 'HeroicEffort' },
  { quest: 'EventBS', eventRoll: [20], eventResultKey: 'LuckyFind' },

  //Seethe EventSH
  { quest: 'EventSH', eventRoll: [1], eventResultKey: 'JustifiedParanoia' },
  { quest: 'EventSH', eventRoll: [2, 3], eventResultKey: 'SignsOfBetrayal' },
  { quest: 'EventSH', eventRoll: [4, 5, 6], eventResultKey: 'NotDeadYet' },
  {
    quest: 'EventSH',
    eventRoll: [7, 8, 9, 10],
    eventResultKey: 'ConfirmingSuspicions',
  },
  {
    quest: 'EventSH',
    eventRoll: [11, 12, 13, 14],
    eventResultKey: 'MutableLandscape',
  },
  { quest: 'EventSH', eventRoll: [15, 16, 17], eventResultKey: 'Inspiration' },
  { quest: 'EventSH', eventRoll: [18, 19], eventResultKey: 'HeroicEffort' },
  { quest: 'EventSH', eventRoll: [20], eventResultKey: 'GrowingFaith' },

  //Shardquake EventSQ
  { quest: 'EventSQ', eventRoll: [1], eventResultKey: 'JustifiedParanoia' },
  {
    quest: 'EventSQ',
    eventRoll: [2, 3, 4, 5, 6, 7],
    eventResultKey: 'FluctuatingCorridors',
  },
  {
    quest: 'EventSQ',
    eventRoll: [8, 9, 10, 11, 12],
    eventResultKey: 'PlungingPillars',
  },
  {
    quest: 'EventSQ',
    eventRoll: [13, 14, 15, 16, 17],
    eventResultKey: 'SuddenRelocation',
  },
  { quest: 'EventSQ', eventRoll: [18], eventResultKey: 'UnexpectedArrivals' },
  { quest: 'EventSQ', eventRoll: [19], eventResultKey: 'ImpalingShards' },
  { quest: 'EventSQ', eventRoll: [20], eventResultKey: 'UncoveredWealth' },

  //Ascension No Hostiles EventA0
  { quest: 'EventA0', eventRoll: [1, 2, 3, 4, 5], eventResultKey: 'Challenge' },
  { quest: 'EventA0', eventRoll: [6, 7], eventResultKey: 'Inspiration' },
  {
    quest: 'EventA0',
    eventRoll: [8, 9, 10, 11],
    eventResultKey: 'IncreasingInstability',
  },
  {
    quest: 'EventA0',
    eventRoll: [12, 13, 14, 15],
    eventResultKey: 'TheFortressStirs',
  },
  {
    quest: 'EventA0',
    eventRoll: [16, 17, 18, 19, 20],
    eventResultKey: 'Recovery',
  },

  //Ascension With Hostiles EventA1
  { quest: 'EventA1', eventRoll: [1, 2], eventResultKey: 'AllIsDust1' },
  { quest: 'EventA1', eventRoll: [3, 4], eventResultKey: 'UnfulfilledDestiny' },
  { quest: 'EventA1', eventRoll: [5, 6], eventResultKey: 'DesperateLunge' },
  {
    quest: 'EventA1',
    eventRoll: [7, 8, 9, 10],
    eventResultKey: 'IncreasingInstability',
  },
  {
    quest: 'EventA1',
    eventRoll: [11, 12, 13, 14],
    eventResultKey: 'TheFortressStirs',
  },
  { quest: 'EventA1', eventRoll: [15, 16, 17], eventResultKey: 'Inspiration' },
  { quest: 'EventA1', eventRoll: [18, 19], eventResultKey: 'HeroicEffort' },
  { quest: 'EventA1', eventRoll: [20], eventResultKey: 'LuckyFind' },
];

var eventResults = [
  {
    eventResultKey: 'AllIsDust1',
    descr: 'ALL IS DUST',
    details:
      'If any discovery markers are still on the battlefield, the leader must discard one of them. If there are no discovery markers, each explorer loses 1 inspiration point, to a minimum of 0.',
  },
  {
    eventResultKey: 'AllIsDust2',
    descr: 'ALL IS DUST',
    details: 'All explorers lose 1 inspiration point (to a minimum of 0).',
  },
  {
    eventResultKey: 'UnfulfilledDestiny',
    descr: 'UNFULFILLED DESTINY',
    details: 'Do not make a destiny roll at the start of the next turn.',
  },
  {
    eventResultKey: 'NotDeadYet',
    descr: 'NOT DEAD YET',
    details:
      'The leader must pick one hostile that was slain during the combat and has not returned to the battlefield, and then deploy them as close to an explorer as possible.',
  },
  {
    eventResultKey: 'ChangingConditions',
    descr: 'CHANGING CONDITIONS',
    details:
      'Draw an encounter card. If the card has a twist, it applies for the rest of the combat. If not, there is no effect.',
  },
  {
    eventResultKey: 'AlarmTripped',
    descr: 'ALARM TRIPPED',
    details:
      'Until the end of the next turn, re-roll reinforcement rolls of 11-20 that do not cause hostiles to arrive.',
  },
  {
    eventResultKey: 'EscapeChamber',
    descr: 'ESCAPE CHAMBER',
    details:
      'The leader replaces the portal furthest from any explorers with a maglev transport escape chamber. If more than one portal is equally far from the explorers, the leader can pick which one to replace. If this even has already been rolled, or if an explorer has used a Summon action, there is no effect.',
  },
  {
    eventResultKey: 'Inspiration',
    descr: 'INSPIRATION',
    details:
      'The leader picks an explorer. That explorer receives 1 inspiration point.',
  },
  {
    eventResultKey: 'HeroicEffort',
    descr: 'HEROIC EFFORT',
    details:
      'The leader picks an explorer that is out of action. Deploy the explorer in the same hex as another explorer or as close to another explorer as possible, and then make a vitality roll for them. If no explorers are out of action, the leader picks an explorer. Make a vitality roll for that explorer.',
  },
  {
    eventResultKey: 'LuckyFind',
    descr: 'LUCKY FIND',
    details:
      'The leader picks an explorer. That explorer draws a discovery card.',
  },
  {
    eventResultKey: 'JustifiedParanoia',
    descr: 'JUSTIFIED PARANOIA',
    details: 'Lose 2 trust. Then shift the battlefield.',
  },
  {
    eventResultKey: 'SignsOfBetrayal',
    descr: 'SIGNS OF BETRAYAL',
    details: 'Lose 1 trust.',
  },
  {
    eventResultKey: 'ConfirmingSuspicions',
    descr: 'CONFIRMING SUSPICIONS',
    details:
      'An explorer chosen by the leader loses 1 inspiration point, or lose 1 trust.',
  },
  {
    eventResultKey: 'MutableLandscape',
    descr: 'MUTABLE LANDSCAPE',
    details: 'Shift the battlefield.',
  },
  {
    eventResultKey: 'GrowingFaith',
    descr: 'GROWING FAITH',
    details: 'Gain 1 trust.',
  },
  {
    eventResultKey: 'ValuableDiscovery',
    descr: 'VALUABLE DISCOVERY',
    details:
      'The leader picks an explorer. That explorer draws a discovery card. If it is a Shardquake card, ignore it and shuffle that card back into the discovery deck.',
  },
  {
    eventResultKey: 'FluctuatingCorridors',
    descr: 'FLUCTUATING CORRIDORS',
    details: 'Shift the battlefield.',
  },
  {
    eventResultKey: 'PlungingPillars',
    descr: 'PLUNGING PILLARS',
    details:
      'Roll the Blackstone dice for each chamber that contains hostiles or explorers. On an 11+ every explorer in that chamber suffers 1 wound, and every hostile in that chamber suffers 1 damage. Finall, shift the battlefield.',
  },
  {
    eventResultKey: 'SuddenRelocation',
    descr: 'SUDDEN RELOCATION',
    details:
      'The hostile player (or the leader if there is no hostile player) must choose one explorer. That explorer is removed from the battlefield and placed on the furthest empty hex from their current position. If this cannot be done, ignore this result.',
  },
  {
    eventResultKey: 'UnexpectedArrivals',
    descr: 'UNEXPECTED ARRIVALS',
    details: 'Immediately make one reinforcement roll for each hostile group.',
  },
  {
    eventResultKey: 'ImpalingShards',
    descr: 'IMPALING SHARDS',
    details:
      'Roll the Blackstone dice for each explorer (except the Archivist). On a 1-5, that explorer suffers 1 grievous wound.',
  },
  {
    eventResultKey: 'UncoveredWealth',
    descr: 'UNCOVERED WEALTH',
    details:
      'The leader picks an explorer. That explorer draws 3 discovery cards and keeps up to 2, shuffling the remaining cards back into the discovery deck. An explorer cannot keep any Shardquake cards - they are shuffled back into the discovery deck. Finally, shift the battlefield.',
  },
  {
    eventResultKey: 'IncreasingInstability',
    descr: 'INCREASING INSTABILITY',
    details:
      'At the beginning of the next event phase, if there is an unstable fragment, the leader must remove two tiles from the unstable fragment, rather than one. Place an unstable counter on the leader marker as a reminder. If there is only one tile in the unstable fragment, or if there is no unstable fragment, there is no effect.',
  },
  {
    eventResultKey: 'TheFortressStirs',
    descr: 'THE FORTRESS STIRS',
    details:
      'If there is no unstable fragment, determine which access hex is furthest from the explorers. If there is more than one access hex furthest from the explorers, the leader picks one of them. The leader resolves the Explore (1+) action as if there were an explorer in that hex taking that action. If there is an unstable fragment, there is no effect.',
  },
  {
    eventResultKey: 'DesperateLunge',
    descr: 'DESPERATE LUNGE',
    details:
      'The leader picks one hostile on the battlefield and activates that hostile.',
  },
  {
    eventResultKey: 'Challenge',
    descr: 'CHALLENGE',
    details:
      'Draw the top card of the Exploration deck and resolve that challenge.',
  },
  {
    eventResultKey: 'Recovery',
    descr: 'RECOVERY',
    details:
      'Resolve a recovery step as described on page 11 of the Blackstone Fortress rules.',
  },
];

function generateEventResultV2(
  rollModifier,
  quest,
  eventResultsObject,
  eventDetailsObject
) {
  var rollResult = rollD20(rollModifier);
  var eventResultKey = '';

  for (var i = 0; i < eventKeySet.length; i++) {
    var event = eventKeySet[i];
    if (quest == event.quest) {
      for (var x = 0; x < event.eventRoll.length; x++) {
        if (rollResult == event.eventRoll[x]) {
          eventResultKey = event.eventResultKey;
          break;
        }
      }
    }
  }

  for (var y = 0; y < eventResults.length; y++) {
    var eventResult = eventResults[y];
    if (eventResultKey == eventResult.eventResultKey) {
      eventResultsObject.text(rollResult + ' - ' + eventResults[y].descr);
      eventDetailsObject.text(eventResults[y].details);
      break;
    }
  }
}

function generateEventResult(
  rollModifier,
  eventResultsObject,
  eventDetailsObject
) {
  var rollResult = rollD20(rollModifier);
  var indexValue;
  if (rollResult == 1) {
    indexValue = 0;
  } //2-3
  else if (rollResult > 1 && rollResult < 4) {
    indexValue = 1;
  } //4-6
  else if (rollResult > 3 && rollResult < 7) {
    indexValue = 2;
  } //7-10
  else if (rollResult > 6 && rollResult < 11) {
    indexValue = 3;
  } //11-14
  else if (rollResult > 10 && rollResult < 15) {
    indexValue = 4;
  } //15-17
  else if (rollResult > 14 && rollResult < 18) {
    indexValue = 5;
  } //18-19
  else if (rollResult > 17 && rollResult < 20) {
    indexValue = 6;
  } //20
  else {
    indexValue = 7;
  }

  eventResultsObject.text(rollResult + ' - ' + eventResults[indexValue].descr);
  eventDetailsObject.text(eventResults[indexValue].details);
}

var traitorGuardHostile = {
  name: 'Traitor Guardsmen',
  id: 'TG',
  size: 'SMALL',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 7) return sneakResult;
    else if (rollResult > 6 && rollResult < 10) return advanceResult;
    else if (rollResult > 9 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 20) return chargeResult;
    else return rushResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return onslaughtResult;
    else if (rollResult > 6 && rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 20) return onslaughtResult;
    else return furyResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 4) return aimResult;
    else if (rollResult > 3 && rollResult < 7) return aimResult;
    else if (rollResult > 6 && rollResult < 10) return aimResult;
    else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 20) return onslaughtResult;
    else return furyResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return onslaughtResult;
    else if (rollResult > 6 && rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 13) return chargeResult;
    else if (rollResult > 12 && rollResult < 20) return chargeResult;
    else return furyResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return advanceResult;
    else if (rollResult > 3 && rollResult < 7) return advanceResult;
    else if (rollResult > 6 && rollResult < 10) return aimResult;
    else if (rollResult > 9 && rollResult < 13) return aimResult;
    else if (rollResult > 12 && rollResult < 20) return onslaughtResult;
    else return rushResult;
  },
};

//Negavolt cultist
var negavoltCultistHostile = {
  name: 'Negavolt cultist',
  id: 'NG',
  size: 'LARGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return rechargeResult;
    else if (rollResult > 3 && rollResult < 7) return holdResult;
    else if (rollResult > 6 && rollResult < 20) return chargeResult;
    else return rushResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return rechargeResult;
    else if (rollResult > 3 && rollResult < 20) return onslaughtResult;
    else return furyResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return rechargeResult;
    else if (rollResult > 3 && rollResult < 20) return chargeResult;
    else return rushResult;
  },
};

//Spindle Drones
var spindleDroneHostile = {
  name: 'Spindle Drone',
  id: 'SD',
  size: 'SMALL',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 7) return sneakResult;
    else if (rollResult > 6 && rollResult < 13) {
      if ($('input:checked').val() == 'SD') {
        return advanceResult;
      } else return sneakResult;
    } else if (rollResult > 12 && rollResult < 20) {
      if ($('input:checked').val() == 'SD') {
        return scuttleResult;
      } else return advanceResult;
    } else return alertResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) {
      if ($('input:checked').val() == 'SD') {
        return onslaughtResult;
      } else return fallbackResult;
    } else if (rollResult > 6 && rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 20) return onslaughtResult;
    else return alertResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 4) return aimResult;
    else if (rollResult > 3 && rollResult < 7) return aimResult;
    else if (rollResult > 6 && rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 20) return onslaughtResult;
    else return alertResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) {
      if ($('input:checked').val() == 'SD') {
        return aimResult;
      } else return fallbackResult;
    } else if (rollResult > 3 && rollResult < 7) return aimResult;
    else if (rollResult > 6 && rollResult < 10) {
      if ($('input:checked').val() == 'SD') {
        return onslaughtResult;
      } else return aimResult;
    } else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 20) return onslaughtResult;
    else return alertResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) {
      if ($('input:checked').val() == 'SD') {
        return aimResult;
      } else return fallbackResult;
    } else if (rollResult > 3 && rollResult < 7) return aimResult;
    else if (rollResult > 6 && rollResult < 10) {
      if ($('input:checked').val() == 'SD') {
        return onslaughtResult;
      } else return aimResult;
    } else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 16) return onslaughtResult;
    else if (rollResult > 15 && rollResult < 20) {
      if ($('input:checked').val() == 'SD') {
        return onslaughtResult;
      } else return advanceResult;
    } else return alertResult;
  },
};

//Guardian Drones
var guardianDroneHostile = {
  name: 'Guardian Drone',
  id: 'GD',
  size: 'HUGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 7) return hoverdronesResult;
    else if (rollResult > 6 && rollResult < 10) return chargeResult;
    else if (rollResult > 9 && rollResult < 20) return advanceResult;
    else return commandResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 20) return onslaughtResult;
    else return commandResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 20) return onslaughtResult;
    else return commandResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 10) return chargeResult;
    else if (rollResult > 9 && rollResult < 20) return onslaughtResult;
    else return commandResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 7) return hoverdronesResult;
    else if (rollResult > 6 && rollResult < 10) return chargeResult;
    else if (rollResult > 9 && rollResult < 16) return advanceResult;
    else if (rollResult > 15 && rollResult < 20) return onslaughtResult;
    else return commandResult;
  },
};

//Ur-Ghuls
var urGhulHostile = {
  name: 'Ur-Ghul',
  id: 'UG',
  size: 'SMALL',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 10) return sneakResult;
    else if (rollResult > 9 && rollResult < 20) return chargeResult;
    else return rushResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 20) return onslaughtResult;
    else return pounceResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 20) return chargeResult;
    else return pounceResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 10) return fallbackResult;
    else return rushResult;
  },
};

//Chaos Beastman
var chaosBeastmanHostile = {
  name: 'Chaos Beastman',
  id: 'CB',
  size: 'LARGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 10) return sneakResult;
    else if (rollResult > 9 && rollResult < 20) return chargeResult;
    else return rushResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 16) return onslaughtResult;
    else return furyResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 20) return chargeResult;
    else return rushResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 10) return advanceResult;
    else if (rollResult > 9 && rollResult < 20) return chargeResult;
    else return rushResult;
  },
};

//Rogue Psyker
var roguePsykerHostile = {
  name: 'Rogue Psyker',
  id: 'RP',
  size: 'LARGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 10) return holdResult;
    else if (rollResult > 9 && rollResult < 16) return disruptResult;
    else if (rollResult > 15 && rollResult < 20) return regenerateResult;
    else return empowerResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 16) return onslaughtResult;
    else return annihilateResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 10) return disruptResult;
    else if (rollResult > 9 && rollResult < 16) return onslaughtResult;
    else if (rollResult > 15 && rollResult < 20) return regenerateResult;
    else return empowerResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 10) return disruptResult;
    else if (rollResult > 9 && rollResult < 16) return onslaughtResult;
    else if (rollResult > 15 && rollResult < 20) return regenerateResult;
    else return empowerResult;
  },
};

//Chaos Space Marine
var chaosSpaceMarineHostile = {
  name: 'Chaos Space Marine',
  id: 'CSM',
  size: 'LARGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return sneakResult;
    else if (rollResult > 3 && rollResult < 10) return advanceResult;
    else if (rollResult > 9 && rollResult < 16) return chargeResult;
    else return rushResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 16) return onslaughtResult;
    else return rapidfireResult;
  },
  coverResult: function (rollResult) {
    if (rollResult < 4) return aimResult;
    else if (rollResult > 3 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 16) return advanceResult;
    else return rapidfireResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 7) return aimResult;
    else if (rollResult > 6 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 16) return advanceResult;
    else return rapidfireResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 10) return aimResult;
    else if (rollResult > 9 && rollResult < 16) return advanceResult;
    else return rapidfireResult;
  },
};

//Obsidius Mallex
var obsidiusMallexHostile = {
  name: 'Obsidius Mallex',
  id: 'OM',
  size: 'HUGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) {
      if ($('input:checked').val() == 'OM') {
        return advanceResult;
      } else return sneakResult;
    } else if (rollResult > 3 && rollResult < 10) return advanceResult;
    else if (rollResult > 9 && rollResult < 13) return chargeResult;
    else return rushResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 13) return onslaughtResult;
    else return furyResult;
  },
  coverResult: function (rollResult) {
    if (rollResult < 7) return chargeResult;
    else if (rollResult > 6 && rollResult < 10) return aimResult;
    else if (rollResult > 9 && rollResult < 16) return onslaughtResult;
    else if (rollResult > 15 && rollResult < 20) return overchargeResult;
    else return rushResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 7) return onslaughtResult;
    else if (rollResult > 6 && rollResult < 16) return chargeResult;
    else return overchargeResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 7) return advanceResult;
    else if (rollResult > 6 && rollResult < 10) return advanceResult;
    else if (rollResult > 9 && rollResult < 16) {
      if ($('input:checked').val() == 'OM') {
        return chargeResult;
      } else return onslaughtResult;
    } else if (rollResult > 15 && rollResult < 20) {
      if ($('input:checked').val() == 'OM') {
        return rushResult;
      } else return overchargeResult;
    } else return rushResult;
  },
};

//Ambull
var ambullHostile = {
  name: 'Ambull',
  id: 'AM',
  size: 'HUGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return tunnelResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return onslaughtResult;
    else return swipeResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 7) return advanceResult;
    else if (rollResult > 6 && rollResult < 18) return chargeResult;
    else return tunnelResult;
  },

  protectiveResult: function (rollResult) {
    if (rollResult < 18) return chargeResult;
    else return tunnelResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 10) {
      if ($('input:checked').val() == 'AM') {
        return advanceResult;
      } else return fallbackResult;
    } else if (rollResult > 9 && rollResult < 18) return chargeResult;
    else return tunnelResult;
  },
};

//Borewyrm Infestation
var borewyrmInfestationHostile = {
  name: 'Borewyrm Infestation',
  id: 'BI',
  size: 'SMALL',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return borewyrmTunnelResult;
    else if (rollResult > 3 && rollResult < 7) return holdResult;
    else if (rollResult > 6 && rollResult < 13) return sneakResult;
    else if (rollResult > 12 && rollResult < 18) return advanceResult;
    else return consumeResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return borewyrmTunnelResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return onslaughtResult;
    else return consumeResult;
  },
  coverResult: function (rollResult) {
    if (rollResult < 4) return borewyrmTunnelResult;
    else if (rollResult > 3 && rollResult < 13) return holdResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return consumeResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return borewyrmTunnelResult;
    else if (rollResult > 3 && rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 18) return chargeResult;
    else return consumeResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return borewyrmTunnelResult;
    else if (rollResult > 3 && rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 16) return chargeResult;
    else return consumeResult;
  },
};

//Traitor Commissar
var traitorCommissarHostile = {
  name: 'Traitor Commissar',
  id: 'TC',
  size: 'LARGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 7) return holdResult;
    else if (rollResult > 6 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return executeTheWeakResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return onslaughtResult;
    else return executeTheWeakResult;
  },
  coverResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return executeTheWeakResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 18) return chargeResult;
    else return executeTheWeakResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 7) return fallbackResult;
    else if (rollResult > 6 && rollResult < 18) return chargeResult;
    else return executeTheWeakResult;
  },
};

//Chaos Ogryn
var chaosOgrynHostile = {
  name: 'Chaos Ogryn',
  id: 'CO',
  size: 'HUGE',

  bodyguardResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 7) return advanceResult;
    else if (rollResult > 6 && rollResult < 20) return guardResult;
    else return crushResult;
  },

  hiddenResult: function (rollResult) {
    if (rollResult < 4) return sneakResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 20) return chargeResult;
    else return crushResult;
  },

  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollresult > 12 && rollResult < 20) return onslaughtResult;
    else crushResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 20) return chargeResult;
    else return crushResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 10) return advanceResult;
    else if (rollResult > 9 && rollResult < 20) return chargeResult;
    else return crushResult;
  },
};

//Poxwalker
var poxwalkerHostile = {
  name: 'Poxwalker',
  id: 'CO',
  size: 'SMALL',

  hiddenResult: function (rollResult) {
    if (rollResult < 7) return holdResult;
    else if (rollResult > 6 && rollResult < 20) return advanceResult;
    else return lurchResult;
  },

  engagedResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 20) return onslaughtResult;
    else return virulentBiteResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 16) return advanceResult;
    else return lurchResult;
  },
};

//PLAGUE MARINE
var plagueMarineHostile = {
  name: 'Plague Marine',
  id: 'PM',
  size: 'LARGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return sneakResult;
    else if (rollResult > 3 && rollResult < 16) return advanceResult;
    else return steadyAdvanceResult;
  },
  engagedResult: function (rollResult) {
    return onslaughtResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 10) return aimResult;
    else if (rollResult > 9 && rollResult < 16) return onslaughtResult;
    else return plagueAnnihilateResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return aimResult;
    else if (rollResult > 3 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 16) return advanceResult;
    else return plagueAnnihilateResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 10) return aimResult;
    else if (rollResult > 9 && rollResult < 16) return advanceResult;
    else return steadyAdvanceResult;
  },
};

//MASTER OF POSSESSION
var masterOfPossessionHostile = {
  name: 'Master of Possession',
  id: 'MOP',
  size: 'HUGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 20) return disruptResult;
    else return ritesOfPossessionResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 20) return onslaughtResult;
    else return warpfireResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 20) return advanceResult;
    else return chargeResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 16) return advanceResult;
    else return chargeResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 20) return advanceResult;
    else return chargeResult;
  },
};

//Greater Possessed
var greaterPossessedHostile = {
  name: 'Greater Possessed',
  id: 'GP',
  size: 'HUGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return warpsurgeResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return rushResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 19) return onslaughtResult;
    else return furyResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 2) return warpsurgeResult;
    else return chargeResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 2) return warpsurgeResult;
    else if (rollResult > 1 && rollResult < 19) return chargeResult;
    else return rushResult;
  },
};

//Cultist
var cultistHostile = {
  name: 'Cultists',
  id: 'CL',
  size: 'SMALL',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return overwhelmResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 18) return onslaughtResult;
    else return fullautoResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return overwhelmResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 18) return chargeResult;
    else return overwhelmResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 10) return advanceResult;
    else if (rollResult > 9 && rollResult < 18) return chargeResult;
    else return overwhelmResult;
  },
};

//Cultist Firebrand
var cultistFirebrandHostile = {
  name: 'Cultist Firebrand',
  id: 'CF',
  size: 'LARGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return firestormResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 18) return onslaughtResult;
    else return allShallBurnResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 19) return chargeResult;
    else return firestormResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return allShallBurnResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 13) return advanceResult;
    else if (rollResult > 12 && rollResult < 18) return chargeResult;
    else return firestormResult;
  },
};

// The Arch***
var archHostile = {
  name: 'The Archivist',
  id: 'ARC',
  size: 'HUGE',
  hiddenResult: function (rollResult) {
    if (rollResult < 4) return holdResult;
    else if (rollResult > 3 && rollResult < 7) return sneakResult;
    else if (rollResult > 6 && rollResult < 10) return observeResult;
    else if (rollResult > 9 && rollResult < 13) return observeResult;
    else return advanceResult;
  },
  engagedResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return steadAdvanceResult2;
    else if (rollResult > 6 && rollResult < 16) return onslaughtResult;
    else if (rollResult > 15 && rollResult < 18) return furyResult;
    else return almightyBlowResult;
  },

  coverResult: function (rollResult) {
    if (rollResult < 4) return steadAdvanceResult2;
    else if (rollResult > 3 && rollResult < 7) return steadAdvanceResult2;
    else if (rollResult > 6 && rollResult < 10) return onslaughtResult;
    else if (rollResult > 9 && rollResult < 13) return onslaughtResult;
    else if (rollResult > 12 && rollResult < 18) return steadAdvanceResult2;
    else return furyResult;
  },

  closeResult: function (rollResult) {
    if (rollResult < 4) return fallbackResult;
    else if (rollResult > 3 && rollResult < 7) return steadAdvanceResult2;
    else if (rollResult > 6 && rollResult < 10) return steadAdvanceResult2;
    else if (rollResult > 9 && rollResult < 16) return onslaughtResult;
    else return chargeResult;
  },

  otherResult: function (rollResult) {
    if (rollResult < 10) return observeResult;
    else if (rollResult > 9 && rollResult < 16) return advanceResult;
    else return steadAdvanceResult2;
  },
};

//Default Blackstone dice roll. Takes modifier which can be a number (negative or positive)
function rollD20(modifier) {
  var result = Math.floor(Math.random() * 20) + 1 + modifier;

  if (result > 20) result = 20;
  else if (result < 1) result = 1;

  return result;
}

function hideAllHostileButtons() {
  $('#TGButton').hide();
  $('#NGButton').hide();
  $('#UGButton').hide();
  $('#SDButton').hide();
  $('#CBButton').hide();
  $('#RPButton').hide();
  $('#CSMButton').hide();
  $('#OMButton').hide();
  $('#OMAButton').hide();
  $('#AMButton').hide();
  $('#AMEButton').hide();
  $('#BIButton').hide();
  $('#TCButton').hide();
  $('#COButton').hide();
  $('#PMButton').hide();
  $('#PWButton').hide();
  $('#GPButton').hide();
  $('#MPButton').hide();
  $('#MOPButton').hide();
  $('#CLButton').hide();
  $('#CFButton').hide();
  $('#GDButton').hide();
  $('#ARCButton').hide();
  //$('#TGCard').hide();
}

function showAllHostileButtons() {
  $('#TGButton').show();
  $('#NGButton').show();
  $('#UGButton').show();
  $('#SDButton').show();
  $('#CBButton').show();
  $('#RPButton').show();
  $('#CSMButton').show();
  $('#OMButton').show();
  $('#OMAButton').show();
  $('#AMButton').show();
  $('#AMEButton').show();
  $('#BIButton').show();
  $('#TCButton').show();
  $('#COButton').show();
  $('#PMButton').show();
  $('#PWButton').show();
  $('#GPButton').show();
  $('#MPButton').show();
  $('#MOPButton').show();
  $('#CLButton').show();
  $('#CFButton').show();
  $('#CFButton').show();
}

function generateRollResult(
  modifier,
  hostileObject,
  hostileResultObject,
  hostileDescrObject,
  hostileStatus
) {
  var d20Roll = rollD20(modifier);
  if (hostileStatus == 'ENGAGED') {
    var rollResult = hostileObject.engagedResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }
  if (hostileStatus == 'HIDDEN') {
    var rollResult = hostileObject.hiddenResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }
  if (hostileStatus == 'OTHER') {
    var rollResult = hostileObject.otherResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }
  if (hostileStatus == 'COVER') {
    var rollResult = hostileObject.coverResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }

  if (hostileStatus == 'CLOSE') {
    var rollResult = hostileObject.closeResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }

  if (hostileStatus == 'PROTECTIVE') {
    var rollResult = hostileObject.protectiveResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }

  if (hostileStatus == 'BODYGUARD') {
    var rollResult = hostileObject.bodyguardResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }

  if (hostileStatus == 'REINFORCEMENT') {
    var rollResult = hostileObject.bodyguardResult(d20Roll);
    hostileResultObject.text(d20Roll + ' - ' + rollResult.result);
    hostileDescrObject.text(rollResult.descr);
  }
}

$(document).ready(function () {
  hideAllHostileButtons();

  $('#generateHostileButton').click(function () {
    showAllHostileButtons();
    showHostile++;
    if (showHostile == 5) {
      alert('You have unlocked the Archivist!!!');
      $('#multiHostileSelect').append(
        '<option value="ARC">The Archivist</option>'
      );
    }
  });

  $('#multiHostileSelect').change(function () {
    $('select > option:selected').each(function () {
      // alert($(this).val());
      if ($(this).val() == 'TG') $('#TGButton').show();
      if ($(this).val() == 'NG') $('#NGButton').show();
      if ($(this).val() == 'UG') $('#UGButton').show();
      if ($(this).val() == 'SD') $('#SDButton').show();
      if ($(this).val() == 'CB') $('#CBButton').show();
      if ($(this).val() == 'RP') $('#RPButton').show();
      if ($(this).val() == 'CSM') $('#CSMButton').show();
      if ($(this).val() == 'OM') $('#OMButton').show();
      if ($(this).val() == 'OMA') $('#OMAButton').show();
      if ($(this).val() == 'AM') $('#AMButton').show();
      if ($(this).val() == 'AME') $('#AMEButton').show();
      if ($(this).val() == 'BI') $('#BIButton').show();
      if ($(this).val() == 'TC') $('#TCButton').show();
      if ($(this).val() == 'CO') $('#COButton').show();
      if ($(this).val() == 'PM') $('#PMButton').show();
      if ($(this).val() == 'PW') $('#PWButton').show();
      if ($(this).val() == 'GP') $('#GPButton').show();
      if ($(this).val() == 'MOP') $('#MOPButton').show();
      if ($(this).val() == 'CL') $('#CLButton').show();
      if ($(this).val() == 'CF') $('#CFButton').show();
      if ($(this).val() == 'GD') $('#GDButton').show();
      if ($(this).val() == 'ARC') $('#ARCButton').show();
    });

    $('select > option:not(:selected)').each(function () {
      // alert($(this).val());
      if ($(this).val() == 'TG') {
        $('#TGButton').hide();
      }

      if ($(this).val() == 'NG') $('#NGButton').hide();
      if ($(this).val() == 'UG') $('#UGButton').hide();
      if ($(this).val() == 'SD') $('#SDButton').hide();
      if ($(this).val() == 'CB') $('#CBButton').hide();
      if ($(this).val() == 'RP') $('#RPButton').hide();
      if ($(this).val() == 'CSM') $('#CSMButton').hide();
      if ($(this).val() == 'OM') $('#OMButton').hide();
      if ($(this).val() == 'OMA') $('#OMAButton').hide();
      if ($(this).val() == 'AM') $('#AMButton').hide();
      if ($(this).val() == 'AME') $('#AMEButton').hide();
      if ($(this).val() == 'BI') $('#BIButton').hide();
      if ($(this).val() == 'TC') $('#TCButton').hide();
      if ($(this).val() == 'CO') $('#COButton').hide();
      if ($(this).val() == 'PM') $('#PMButton').hide();
      if ($(this).val() == 'PW') $('#PWButton').hide();
      if ($(this).val() == 'GP') $('#GPButton').hide();
      if ($(this).val() == 'MOP') $('#MOPButton').hide();
      if ($(this).val() == 'CL') $('#CLButton').hide();
      if ($(this).val() == 'CF') $('#CFButton').hide();
      if ($(this).val() == 'GD') $('#GDButton').hide();

      if ($(this).val() == 'ARC') $('#ARCButton').hide();
    });
  });

  //GUARDSMEN

  $('#TGHiddenButton').click(function () {
    if ($('input:checked').val() == 'TG') {
      generateRollResult(
        2,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'HIDDEN'
      );
    } else generateRollResult(0, traitorGuardHostile, $('#TGResultValue'), $('#TGResultDescr'), 'HIDDEN');
  });
  $('#TGEngagedButton').click(function () {
    if ($('input:checked').val() == 'TG')
      generateRollResult(
        2,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'ENGAGED'
      );
    else
      generateRollResult(
        0,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'ENGAGED'
      );
  });
  $('#TGCoverButton').click(function () {
    // var d20Roll = rollD20(modifier);
    // var rollResult = traitorGuardHostile.coverResult(d20Roll);
    // $('#TGResultValue').text(d20Roll+" - "+rollResult.result);
    // $('#TGResultDescr').text(rollResult.descr);

    if ($('input:checked').val() == 'TG')
      generateRollResult(
        2,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'COVER'
      );
    else
      generateRollResult(
        0,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'COVER'
      );
  });
  $('#TGCloseButton').click(function () {
    // var d20Roll = rollD20(modifier);
    // var rollResult = traitorGuardHostile.closeResult(d20Roll);
    // $('#TGResultValue').text(d20Roll+" - "+rollResult.result);
    // $('#TGResultDescr').text(rollResult.descr);

    if ($('input:checked').val() == 'TG')
      generateRollResult(
        2,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'CLOSE'
      );
    else
      generateRollResult(
        0,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'CLOSE'
      );
  });
  $('#TGOtherButton').click(function () {
    // var d20Roll = rollD20(modifier);
    // var rollResult = traitorGuardHostile.otherResult(d20Roll);
    // $('#TGResultValue').text(d20Roll+" - "+rollResult.result);
    // $('#TGResultDescr').text(rollResult.descr);

    if ($('input:checked').val() == 'TG')
      generateRollResult(
        2,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'OTHER'
      );
    else
      generateRollResult(
        0,
        traitorGuardHostile,
        $('#TGResultValue'),
        $('#TGResultDescr'),
        'OTHER'
      );
  });

  $('#TGCard').on('hidden.bs.collapse', function () {
    $('#TGResultValue').text('');
    $('#TGResultDescr').text('');
    $('#TGCheckBox').prop('checked', false);
  });

  //NEGAVOLT
  $('#NGHiddenButton').click(function () {
    generateRollResult(
      0,
      negavoltCultistHostile,
      $('#NGResultValue'),
      $('#NGResultDescr'),
      'HIDDEN'
    );
  });

  $('#NGEngagedButton').click(function () {
    generateRollResult(
      0,
      negavoltCultistHostile,
      $('#NGResultValue'),
      $('#NGResultDescr'),
      'ENGAGED'
    );
  });
  $('#NGOtherButton').click(function () {
    generateRollResult(
      0,
      negavoltCultistHostile,
      $('#NGResultValue'),
      $('#NGResultDescr'),
      'OTHER'
    );
  });

  $('#NGCard').on('hidden.bs.collapse', function () {
    $('#NGResultValue').text('');
    $('#NGResultDescr').text('');
  });

  //Spindle Drones
  $('#SDHiddenButton').click(function () {
    generateRollResult(
      0,
      spindleDroneHostile,
      $('#SDResultValue'),
      $('#SDResultDescr'),
      'HIDDEN'
    );
  });

  $('#SDEngagedButton').click(function () {
    generateRollResult(
      0,
      spindleDroneHostile,
      $('#SDResultValue'),
      $('#SDResultDescr'),
      'ENGAGED'
    );
  });

  $('#SDCoverButton').click(function () {
    generateRollResult(
      0,
      spindleDroneHostile,
      $('#SDResultValue'),
      $('#SDResultDescr'),
      'COVER'
    );
  });

  $('#SDCloseButton').click(function () {
    generateRollResult(
      0,
      spindleDroneHostile,
      $('#SDResultValue'),
      $('#SDResultDescr'),
      'CLOSE'
    );
  });

  $('#SDOtherButton').click(function () {
    generateRollResult(
      0,
      spindleDroneHostile,
      $('#SDResultValue'),
      $('#SDResultDescr'),
      'OTHER'
    );
  });

  $('#SDCard').on('hidden.bs.collapse', function () {
    $('#SDResultValue').text('');
    $('#SDResultDescr').text('');
  });

  //Guardian Drone
  $('#GDHiddenButton').click(function () {
    generateRollResult(
      0,
      guardianDroneHostile,
      $('#GDResultValue'),
      $('#GDResultDescr'),
      'HIDDEN'
    );
  });

  $('#GDEngagedButton').click(function () {
    generateRollResult(
      0,
      guardianDroneHostile,
      $('#GDResultValue'),
      $('#GDResultDescr'),
      'ENGAGED'
    );
  });

  $('#GDCoverButton').click(function () {
    generateRollResult(
      0,
      guardianDroneHostile,
      $('#GDResultValue'),
      $('#GDResultDescr'),
      'COVER'
    );
  });

  $('#GDCloseButton').click(function () {
    generateRollResult(
      0,
      guardianDroneHostile,
      $('#GDResultValue'),
      $('#GDResultDescr'),
      'CLOSE'
    );
  });

  $('#GDOtherButton').click(function () {
    generateRollResult(
      0,
      guardianDroneHostile,
      $('#GDResultValue'),
      $('#GDResultDescr'),
      'OTHER'
    );
  });

  $('#GDCard').on('hidden.bs.collapse', function () {
    $('#GDResultValue').text('');
    $('#GDResultDescr').text('');
  });

  //Ur-Ghuls
  $('#UGHiddenButton').click(function () {
    generateRollResult(
      0,
      urGhulHostile,
      $('#UGResultValue'),
      $('#UGResultDescr'),
      'HIDDEN'
    );
  });

  $('#UGEngagedButton').click(function () {
    generateRollResult(
      0,
      urGhulHostile,
      $('#UGResultValue'),
      $('#UGResultDescr'),
      'ENGAGED'
    );
  });

  $('#UGCloseButton').click(function () {
    generateRollResult(
      0,
      urGhulHostile,
      $('#UGResultValue'),
      $('#UGResultDescr'),
      'CLOSE'
    );
  });

  $('#UGOtherButton').click(function () {
    generateRollResult(
      0,
      urGhulHostile,
      $('#UGResultValue'),
      $('#UGResultDescr'),
      'OTHER'
    );
  });

  $('#UGCard').on('hidden.bs.collapse', function () {
    $('#UGResultValue').text('');
    $('#UGResultDescr').text('');
  });

  //Chaos Beastman
  $('#CBHiddenButton').click(function () {
    generateRollResult(
      0,
      chaosBeastmanHostile,
      $('#CBResultValue'),
      $('#CBResultDescr'),
      'HIDDEN'
    );
  });

  $('#CBEngagedButton').click(function () {
    generateRollResult(
      0,
      chaosBeastmanHostile,
      $('#CBResultValue'),
      $('#CBResultDescr'),
      'ENGAGED'
    );
  });

  $('#CBCloseButton').click(function () {
    generateRollResult(
      0,
      chaosBeastmanHostile,
      $('#CBResultValue'),
      $('#CBResultDescr'),
      'CLOSE'
    );
  });

  $('#CBOtherButton').click(function () {
    generateRollResult(
      0,
      chaosBeastmanHostile,
      $('#CBResultValue'),
      $('#CBResultDescr'),
      'OTHER'
    );
  });

  $('#CBCard').on('hidden.bs.collapse', function () {
    $('#CBResultValue').text('');
    $('#CBResultDescr').text('');
  });

  //Rogue Psyker
  $('#RPHiddenButton').click(function () {
    generateRollResult(
      0,
      roguePsykerHostile,
      $('#RPResultValue'),
      $('#RPResultDescr'),
      'HIDDEN'
    );
  });

  $('#RPEngagedButton').click(function () {
    generateRollResult(
      0,
      roguePsykerHostile,
      $('#RPResultValue'),
      $('#RPResultDescr'),
      'ENGAGED'
    );
  });

  $('#RPCloseButton').click(function () {
    generateRollResult(
      0,
      roguePsykerHostile,
      $('#RPResultValue'),
      $('#RPResultDescr'),
      'CLOSE'
    );
  });

  $('#RPOtherButton').click(function () {
    generateRollResult(
      0,
      roguePsykerHostile,
      $('#RPResultValue'),
      $('#RPResultDescr'),
      'OTHER'
    );
  });

  $('#RPCard').on('hidden.bs.collapse', function () {
    $('#RPResultValue').text('');
    $('#RPResultDescr').text('');
  });

  //Chaos Space Marines
  $('#CSMHiddenButton').click(function () {
    generateRollResult(
      0,
      chaosSpaceMarineHostile,
      $('#CSMResultValue'),
      $('#CSMResultDescr'),
      'HIDDEN'
    );
  });

  $('#CSMEngagedButton').click(function () {
    generateRollResult(
      0,
      chaosSpaceMarineHostile,
      $('#CSMResultValue'),
      $('#CSMResultDescr'),
      'ENGAGED'
    );
  });

  $('#CSMCoverButton').click(function () {
    generateRollResult(
      0,
      chaosSpaceMarineHostile,
      $('#CSMResultValue'),
      $('#CSMResultDescr'),
      'COVER'
    );
  });

  $('#CSMCloseButton').click(function () {
    generateRollResult(
      0,
      chaosSpaceMarineHostile,
      $('#CSMResultValue'),
      $('#CSMResultDescr'),
      'CLOSE'
    );
  });

  $('#CSMOtherButton').click(function () {
    generateRollResult(
      0,
      chaosSpaceMarineHostile,
      $('#CSMResultValue'),
      $('#CSMResultDescr'),
      'OTHER'
    );
  });

  $('#CSMCard').on('hidden.bs.collapse', function () {
    $('#CSMResultValue').text('');
    $('#CSMResultDescr').text('');
  });

  //Obsidius Mallex
  $('#OMHiddenButton').click(function () {
    generateRollResult(
      0,
      obsidiusMallexHostile,
      $('#OMResultValue'),
      $('#OMResultDescr'),
      'HIDDEN'
    );
  });

  $('#OMEngagedButton').click(function () {
    generateRollResult(
      0,
      obsidiusMallexHostile,
      $('#OMResultValue'),
      $('#OMResultDescr'),
      'ENGAGED'
    );
  });

  $('#OMCoverButton').click(function () {
    generateRollResult(
      0,
      obsidiusMallexHostile,
      $('#OMResultValue'),
      $('#OMResultDescr'),
      'COVER'
    );
  });

  $('#OMCloseButton').click(function () {
    generateRollResult(
      0,
      obsidiusMallexHostile,
      $('#OMResultValue'),
      $('#OMResultDescr'),
      'CLOSE'
    );
  });

  $('#OMOtherButton').click(function () {
    generateRollResult(
      0,
      obsidiusMallexHostile,
      $('#OMResultValue'),
      $('#OMResultDescr'),
      'OTHER'
    );
  });

  $('#OMCard').on('hidden.bs.collapse', function () {
    $('#OMResultValue').text('');
    $('#OMResultDescr').text('');
  });

  //Ambull
  $('#AMHiddenButton').click(function () {
    generateRollResult(
      0,
      ambullHostile,
      $('#AMResultValue'),
      $('#AMResultDescr'),
      'HIDDEN'
    );
  });

  $('#AMEngagedButton').click(function () {
    generateRollResult(
      0,
      ambullHostile,
      $('#AMResultValue'),
      $('#AMResultDescr'),
      'ENGAGED'
    );
  });

  $('#AMProtectiveButton').click(function () {
    generateRollResult(
      0,
      ambullHostile,
      $('#AMResultValue'),
      $('#AMResultDescr'),
      'PROTECTIVE'
    );
  });

  $('#AMCloseButton').click(function () {
    generateRollResult(
      0,
      ambullHostile,
      $('#AMResultValue'),
      $('#AMResultDescr'),
      'CLOSE'
    );
  });

  $('#AMOtherButton').click(function () {
    generateRollResult(
      0,
      ambullHostile,
      $('#AMResultValue'),
      $('#AMResultDescr'),
      'OTHER'
    );
  });

  $('#AMCard').on('hidden.bs.collapse', function () {
    $('#AMResultValue').text('');
    $('#AMResultDescr').text('');
  });

  //Borewyrm Infestation
  $('#BIHiddenButton').click(function () {
    generateRollResult(
      0,
      borewyrmInfestationHostile,
      $('#BIResultValue'),
      $('#BIResultDescr'),
      'HIDDEN'
    );
  });

  $('#BIEngagedButton').click(function () {
    generateRollResult(
      0,
      borewyrmInfestationHostile,
      $('#BIResultValue'),
      $('#BIResultDescr'),
      'ENGAGED'
    );
  });

  $('#BICoverButton').click(function () {
    generateRollResult(
      0,
      borewyrmInfestationHostile,
      $('#BIResultValue'),
      $('#BIResultDescr'),
      'COVER'
    );
  });

  $('#BICloseButton').click(function () {
    generateRollResult(
      0,
      borewyrmInfestationHostile,
      $('#BIResultValue'),
      $('#BIResultDescr'),
      'CLOSE'
    );
  });

  $('#BIOtherButton').click(function () {
    generateRollResult(
      0,
      borewyrmInfestationHostile,
      $('#BIResultValue'),
      $('#BIResultDescr'),
      'OTHER'
    );
  });

  $('#BICard').on('hidden.bs.collapse', function () {
    $('#BIResultValue').text('');
    $('#BIResultDescr').text('');
  });

  //Traitor Commissar
  $('#TCHiddenButton').click(function () {
    generateRollResult(
      0,
      traitorCommissarHostile,
      $('#TCResultValue'),
      $('#TCResultDescr'),
      'HIDDEN'
    );
  });

  $('#TCEngagedButton').click(function () {
    generateRollResult(
      0,
      traitorCommissarHostile,
      $('#TCResultValue'),
      $('#TCResultDescr'),
      'ENGAGED'
    );
  });

  $('#TCCoverButton').click(function () {
    generateRollResult(
      0,
      traitorCommissarHostile,
      $('#TCResultValue'),
      $('#TCResultDescr'),
      'COVER'
    );
  });

  $('#TCCloseButton').click(function () {
    generateRollResult(
      0,
      traitorCommissarHostile,
      $('#TCResultValue'),
      $('#TCResultDescr'),
      'CLOSE'
    );
  });

  $('#TCOtherButton').click(function () {
    generateRollResult(
      0,
      traitorCommissarHostile,
      $('#TCResultValue'),
      $('#TCResultDescr'),
      'OTHER'
    );
  });

  $('#TCCard').on('hidden.bs.collapse', function () {
    $('#TCResultValue').text('');
    $('#TCResultDescr').text('');
  });

  //Chaos Ogryn
  $('#COHiddenButton').click(function () {
    generateRollResult(
      0,
      chaosOgrynHostile,
      $('#COResultValue'),
      $('#COResultDescr'),
      'HIDDEN'
    );
  });

  $('#COEngagedButton').click(function () {
    generateRollResult(
      0,
      chaosOgrynHostile,
      $('#COResultValue'),
      $('#COResultDescr'),
      'ENGAGED'
    );
  });

  $('#COBodyguardButton').click(function () {
    generateRollResult(
      0,
      chaosOgrynHostile,
      $('#COResultValue'),
      $('#COResultDescr'),
      'BODYGUARD'
    );
  });

  $('#COCloseButton').click(function () {
    generateRollResult(
      0,
      chaosOgrynHostile,
      $('#COResultValue'),
      $('#COResultDescr'),
      'CLOSE'
    );
  });

  $('#COOtherButton').click(function () {
    generateRollResult(
      0,
      chaosOgrynHostile,
      $('#COResultValue'),
      $('#COResultDescr'),
      'OTHER'
    );
  });

  $('#COCard').on('hidden.bs.collapse', function () {
    $('#COResultValue').text('');
    $('#COResultDescr').text('');
  });

  //Poxwalker
  $('#PWHiddenButton').click(function () {
    generateRollResult(
      0,
      poxwalkerHostile,
      $('#PWResultValue'),
      $('#PWResultDescr'),
      'HIDDEN'
    );
  });

  $('#PWEngagedButton').click(function () {
    generateRollResult(
      0,
      poxwalkerHostile,
      $('#PWResultValue'),
      $('#PWResultDescr'),
      'ENGAGED'
    );
  });

  $('#PWOtherButton').click(function () {
    generateRollResult(
      0,
      poxwalkerHostile,
      $('#PWResultValue'),
      $('#PWResultDescr'),
      'OTHER'
    );
  });

  $('#PWCard').on('hidden.bs.collapse', function () {
    $('#PWResultValue').text('');
    $('#PWResultDescr').text('');
  });

  //Plague Marines
  $('#PMHiddenButton').click(function () {
    generateRollResult(
      0,
      plagueMarineHostile,
      $('#PMResultValue'),
      $('#PMResultDescr'),
      'HIDDEN'
    );
  });

  $('#PMEngagedButton').click(function () {
    generateRollResult(
      0,
      plagueMarineHostile,
      $('#PMResultValue'),
      $('#PMResultDescr'),
      'ENGAGED'
    );
  });

  $('#PMCoverButton').click(function () {
    generateRollResult(
      0,
      plagueMarineHostile,
      $('#PMResultValue'),
      $('#PMResultDescr'),
      'COVER'
    );
  });

  $('#PMCloseButton').click(function () {
    generateRollResult(
      0,
      plagueMarineHostile,
      $('#PMResultValue'),
      $('#PMResultDescr'),
      'CLOSE'
    );
  });

  $('#PMOtherButton').click(function () {
    generateRollResult(
      0,
      plagueMarineHostile,
      $('#PMResultValue'),
      $('#PMResultDescr'),
      'OTHER'
    );
  });

  $('#PMCard').on('hidden.bs.collapse', function () {
    $('#PMResultValue').text('');
    $('#PMResultDescr').text('');
  });

  //Plague Marines
  $('#MOPHiddenButton').click(function () {
    generateRollResult(
      0,
      masterOfPossessionHostile,
      $('#MOPResultValue'),
      $('#MOPResultDescr'),
      'HIDDEN'
    );
  });

  $('#MOPEngagedButton').click(function () {
    generateRollResult(
      0,
      masterOfPossessionHostile,
      $('#MOPResultValue'),
      $('#MOPResultDescr'),
      'ENGAGED'
    );
  });

  $('#MOPCoverButton').click(function () {
    generateRollResult(
      0,
      masterOfPossessionHostile,
      $('#MOPResultValue'),
      $('#MOPResultDescr'),
      'COVER'
    );
  });

  $('#MOPCloseButton').click(function () {
    generateRollResult(
      0,
      masterOfPossessionHostile,
      $('#MOPResultValue'),
      $('#MOPResultDescr'),
      'CLOSE'
    );
  });

  $('#MOPOtherButton').click(function () {
    generateRollResult(
      0,
      masterOfPossessionHostile,
      $('#MOPResultValue'),
      $('#MOPResultDescr'),
      'OTHER'
    );
  });

  $('#MOPCard').on('hidden.bs.collapse', function () {
    $('#MOPResultValue').text('');
    $('#MOPResultDescr').text('');
  });

  //GREATER POSSESSED
  $('#GPHiddenButton').click(function () {
    generateRollResult(
      0,
      greaterPossessedHostile,
      $('#GPResultValue'),
      $('#GPResultDescr'),
      'HIDDEN'
    );
  });

  $('#GPEngagedButton').click(function () {
    generateRollResult(
      0,
      greaterPossessedHostile,
      $('#GPResultValue'),
      $('#GPResultDescr'),
      'ENGAGED'
    );
  });

  $('#GPCloseButton').click(function () {
    generateRollResult(
      0,
      greaterPossessedHostile,
      $('#GPResultValue'),
      $('#GPResultDescr'),
      'CLOSE'
    );
  });

  $('#GPOtherButton').click(function () {
    generateRollResult(
      0,
      greaterPossessedHostile,
      $('#GPResultValue'),
      $('#GPResultDescr'),
      'OTHER'
    );
  });

  $('#GPCard').on('hidden.bs.collapse', function () {
    $('#GPResultValue').text('');
    $('#GPResultDescr').text('');
  });

  //Cultists
  $('#CLHiddenButton').click(function () {
    if ($('input:checked').val() == 'CL')
      generateRollResult(
        2,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'HIDDEN'
      );
    else
      generateRollResult(
        0,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'HIDDEN'
      );
  });

  $('#CLEngagedButton').click(function () {
    if ($('input:checked').val() == 'CL')
      generateRollResult(
        2,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'ENGAGED'
      );
    else
      generateRollResult(
        0,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'ENGAGED'
      );
  });

  $('#CLCoverButton').click(function () {
    if ($('input:checked').val() == 'CL')
      generateRollResult(
        2,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'COVER'
      );
    else
      generateRollResult(
        0,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'COVER'
      );
  });

  $('#CLCloseButton').click(function () {
    if ($('input:checked').val() == 'CL')
      generateRollResult(
        2,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'CLOSE'
      );
    else
      generateRollResult(
        0,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'CLOSE'
      );
  });

  $('#CLOtherButton').click(function () {
    if ($('input:checked').val() == 'CL')
      generateRollResult(
        2,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'OTHER'
      );
    else
      generateRollResult(
        0,
        cultistHostile,
        $('#CLResultValue'),
        $('#CLResultDescr'),
        'OTHER'
      );
  });

  $('#CLCard').on('hidden.bs.collapse', function () {
    $('#CLResultValue').text('');
    $('#CLResultDescr').text('');
    $('#CLCheckBox').prop('checked', false);
  });

  //Cultist Firebrand
  $('#CFHiddenButton').click(function () {
    generateRollResult(
      0,
      cultistFirebrandHostile,
      $('#CFResultValue'),
      $('#CFResultDescr'),
      'HIDDEN'
    );
  });

  $('#CFEngagedButton').click(function () {
    generateRollResult(
      0,
      cultistFirebrandHostile,
      $('#CFResultValue'),
      $('#CFResultDescr'),
      'ENGAGED'
    );
  });

  $('#CFCoverButton').click(function () {
    generateRollResult(
      0,
      cultistFirebrandHostile,
      $('#CFResultValue'),
      $('#CFResultDescr'),
      'COVER'
    );
  });

  $('#CFCloseButton').click(function () {
    generateRollResult(
      0,
      cultistFirebrandHostile,
      $('#CFResultValue'),
      $('#CFResultDescr'),
      'CLOSE'
    );
  });

  $('#CFOtherButton').click(function () {
    generateRollResult(
      0,
      cultistFirebrandHostile,
      $('#CFResultValue'),
      $('#CFResultDescr'),
      'OTHER'
    );
  });

  $('#CFCard').on('hidden.bs.collapse', function () {
    $('#CFResultValue').text('');
    $('#CFResultDescr').text('');
  });

  // The ARCH***
  $('#ARCHiddenButton').click(function () {
    generateRollResult(
      0,
      archHostile,
      $('#ARCResultValue'),
      $('#ARCResultDescr'),
      'HIDDEN'
    );
  });
  $('#ARCEngagedButton').click(function () {
    generateRollResult(
      0,
      archHostile,
      $('#ARCResultValue'),
      $('#ARCResultDescr'),
      'ENGAGED'
    );
  });

  $('#ARCCoverButton').click(function () {
    generateRollResult(
      0,
      traitorGuardHostile,
      $('#ARCResultValue'),
      $('#ARCResultDescr'),
      'COVER'
    );
  });
  $('#ARCCloseButton').click(function () {
    generateRollResult(
      0,
      traitorGuardHostile,
      $('#ARCResultValue'),
      $('#ARCResultDescr'),
      'CLOSE'
    );
  });
  $('#ARCOtherButton').click(function () {
    generateRollResult(
      0,
      traitorGuardHostile,
      $('#ARCResultValue'),
      $('#ARCResultDescr'),
      'OTHER'
    );
  });

  $('#ARCCard').on('hidden.bs.collapse', function () {
    $('#ARCResultValue').text('');
    $('#ARCResultDescr').text('');
    $('#ARCCheckBox').prop('checked', false);
  });

  $('#resetHostilesButton').click(function () {
    location.reload();
  });

  $('#blackstoneRoll').click(function () {
    $('#blackstoneDiceResult').text(rollD20(0));
  });

  $('#clearHostileListButon').click(function () {
    hideAllHostileButtons();
    $('#multiHostileSelect').val([]);
  });
  //On click event roll the dice and apply the result
  $('#eventButton').click(function () {
    //generateEventResult(0, $('#eventTitleDescr'), $('#eventDetailDescr'))
    generateEventResultV2(
      0,
      $('#multiEventSelect').val(),
      $('#eventTitleDescr'),
      $('#eventDetailDescr')
    );
  });

  function reinforce(modifier) {
    var result = rollD20(modifier);
    var resultText;
    if (result == 3) {
      resultText = 'ROLL:' + result + '|SMALL-2|LARGE-0|HUGE-0|';
    } else if (result == 2) {
      resultText = 'ROLL:' + result + '|SMALL-4|LARGE-2|HUGE-1|';
    } else if (result == 1) {
      resultText = 'ROLL:' + result + ' |SMALL-6|LARGE-4|HUGE-2|';
    } else resultText = 'NO REINFORCEMENTS';
    return resultText;
  }

  //On click event roll the dice and apply the result
  $('#reinforcementButton').click(function () {
    $('#result').text(reinforce(0));
    //generateResult(0, $('#reinforcementResult'), $('#eventDetailDescr'))
  });

  $('#blackstoneRoll').hide();
  $('#resetHostilesButton').hide();
});
