
  var menuApp = angular.module("MenuApp", []);
  if (language == 'pt-br') {
    menuApp.controller("MenuCtrl", function($scope) {

      $scope.Yes = 'Sim';
      $scope.No = 'Não';
      $scope.Title = 'Pontuador do Animal Allies (v2.0)';
      $scope.Timers = 'Cronômetros';
      $scope.Saves = 'Salvos';
      $scope.Points = 'Pontos';

      $scope.M01 = 'TRANSPORTE DE TUBARÃO';
      $scope.M01a = 'O Tanque e Tubarão estão completamente no Alvo 1 (retângulo à esquerda?)';
      $scope.M01b = 'O Tanque e Tubarão estão completamente no Alvo 2 (retângulo à direita?)';
      $scope.M01c = 'O Tubarão está tocando apenas o fundo do tanque e nenhuma parede?';

      $scope.M02 = 'AÇÃO DO CÃO-GUIA';
      $scope.M02a = 'A Cerca de Proteção está abaixada e o robô cruzou-a completamente do Oeste?';

      $scope.M03 = 'CONSERVAÇÃO DOS ANIMAIS';
      $scope.M03a = 'Quantos animais idênticos estão completamente no mesmo lado da mesa?';
      $scope.M04 = 'ALIMENTAÇÃO';
      $scope.M04a = 'Quantas peças de Comida combinadas estão completamente na área alvo?';
      $scope.M05 = 'BIOMIMÉTICA';
      $scope.M05a = 'A Parede de Biomimética suporta todo o peso do Lagarto Branco?';
      $scope.M05b = 'A Parede de Biomimética suporta todo o peso do robô?';
      $scope.M06 = 'AUTOMAÇÃO DE ORDENHA';
      $scope.M06a = 'O Leite e Estrume rolaram todos para fora?';
      $scope.M06b = 'Todo Leite rolou para fora, mas nenhum Estrume?';
      $scope.M07 = 'LIBERTAÇÃO DO PANDA';
      $scope.M07a = 'A alavanca está completamente aberta no sentido horário?';
      $scope.M08 = 'RECUPERAÇÃO DA CÂMERA';
      $scope.M08a = 'A Câmera está completamente na Base?';
      $scope.M09 = 'TREINAMENTO E PESQUISA';
      $scope.M09a = 'O Cão e o Treinador estão completamente na Área de Treinamento e Pesquisa?';
      $scope.M09b = 'O Zoólogo está completamente na Área de Treinamento e Pesquisa?';
      $scope.M09c = 'Quantas Amostras de Estrume estão completamente na Área de Treinamento e Pesquisa?';
      $scope.M10 = 'APICULTURA';
      $scope.M10a = 'A Abelha está na Colmeia e não há Mel na mesma?';
      $scope.M10b = 'A Abelha está na Colmeia e o Mel está completamente na Base?';
      $scope.M11 = 'PRÓTESE';
      $scope.M11a = 'A Prótese está ajustada no Animal de Estimação E não está segurada pelo Juiz?';
      $scope.M11b = 'A Prótese está ajustada no Animal de Estimação E o mesmo está completamente na sua Fazenda?';
      $scope.M12 = 'FOCA NA BASE';
      $scope.M12a = 'A Foca está completamente na Base e não está quebrada?';
      $scope.M13 = 'LEITE NA BASE';
      $scope.M13a = 'Todos os três Leites estão completamente na Base?';
      $scope.M14 = 'LEITE NA RAMPA';
      $scope.M14a = 'Todos os três Leites estão completamente apoiados pela Rampa?';
      $scope.M14b = 'Todos os três Leites estão completamente apoiados pela Rampa E são as únicas coisas apoiadas pela Rampa?';
      $scope.M14c = 'Todos os três Leites estão completamente apoiados pela Rampa E são as únicas coisas apoiadas pela Rampa E estão todos de pé?';
      $scope.M15 = 'TODAS AS AMOSTRAS';
      $scope.M15a = 'Todas as sete Amostras de Estrume estão completamente na Área de Treinamento e Pesquisa?';
      $scope.Penalty = 'PENALIDADES';
      $scope.Penaltya = 'Quantas Amostras de Estrume estão no triângulo branco?';
    });

  } else if (language == "nl") {
         menuApp.controller("MenuCtrl", function($scope) {

      $scope.Yes = 'Ja';
      $scope.No = 'Nee';
      $scope.Title = 'Animal Allies Puntenteller (v2.0)';
      $scope.Timers = 'Timers';
      $scope.Saves = 'Saves';
      $scope.Points = 'Punten';

      $scope.M01 = 'HAAIENVERVOER';
      $scope.M01a = 'Zijn de tank en de haai compleet in gebied 1 (linker box?';
      $scope.M01b = 'Zijn de tank en de haai complete in gebied 2 (rechter box?)';
      $scope.M01c = 'Raakt de haai alleen de de bodem van de tank aan?';
      $scope.M01d = 'Opmerking: Na de start is het niet toegestaan date er iets ander dan de haai de tank raakt';
      $scope.M02 = 'HULPHOND IN ACTIE';
      $scope.M02a = 'Is het waarschuwinshek omlaag?';
      $scope.M02b = 'Opmerking: Waarschuwingshek moet omlaag zijn, omdat de robot dit volledig doorkruist van het westen, nadat hij tussen de slagbomen heeft gereden';
      $scope.M03 = 'DIERENBESCHERMING';
      $scope.M03a = 'Hoeveel identieke paren van dieren zijn op beide tafels?';
      $scope.M03b = 'Opmerking: Elk paar moet worden gecreëerd door de rotatie van de Animal Conservation Mission Model.';
      $scope.M04 = 'VOEREN';
      $scope.M04a = 'Hoeveel stukken voedsel zijn volledig in een dierengebied?';
      $scope.M04b = 'Opmerking: Als er meerdere stukken voedsel zijn in een gebied, moeten ze allemaal met elkaar overeenkomen.';
      $scope.M05 = 'Biomimicry';
      $scope.M05a = 'Draagt de Biomimicry Muur al het gewicht van de Witte Gecko?';
      $scope.M05b = 'Draagt de Biomimicry Muur al het gewicht van de robot?';
      $scope.M05c = 'Opmerking: Niets van een scoring object mag in contact zijn met iets anders dan de Biomimicry muur en / of groene Gecko, De twee scorende voorwerpen mogen wel met elkaar in contact komen.';
      $scope.M06 = 'MELKMACHINE';
      $scope.M06a = 'Melk en mest zijn uitgerold?';
      $scope.M06b = 'Alle Melk is uitgerold, maar de mest niet';
      $scope.M06c = 'Opmerking: De enige beweging die de robot maakt om de melk en / of mest te bewegen komt door het verplaatsen van de rode hendel';
      $scope.M07 = 'PANDA VRIJLATING';
      $scope.M07a = 'Is de hendel volledige open, met de klok mee?';
      $scope.M08 = 'CAMERA TERUGHALEN';
      $scope.M08a = 'Is de camera volledig in de basis?';
      $scope.M09 = 'TRAINING EN ONDERZOEK';
      $scope.M09a = 'Zijn de Hond en Trainer volledig in het trainings-  en onderzoekgebied?';
      $scope.M09b = 'Is de dierdeskundige volledig in het trainings- en onderzoekgebied?';
      $scope.M09c = 'Hoeveel mest Monsters zijn volledig in het trainings- en onderzoekgebied?';
      $scope.M09d = 'Opmerking: Er mag slechts één mest monster per keer worden vervoerd';
      $scope.M10 = 'BIJEN HOUDEN';
      $scope.M10a = 'Is de bij op de bijenkorf en er is geen honing in de bijenkorf?';
      $scope.M10b = 'Is de bij op de bijenkorf en is er honing in de basis?';
      $scope.M11 = 'PROTHESE';
      $scope.M11a = 'Is de protese bevestigd aan het huisdier dus niet in bezit van de scheidsrechter?';
      $scope.M11b = 'Is de protese bevestigd aan het huisdier en is het huisdier volledig in het boerderijgebied?';
      $scope.M12 = 'ZEEHOND';
      $scope.M12a = 'Is de zeehond volledig in de basis en niet beschadigd?';
      $scope.M13 = 'MELK IN BASIS';
      $scope.M13a = 'Zijn  alle 3 de melk volledig in de basis?';
      $scope.M14 = 'MELK OP DE OPRIT';
      $scope.M14a = 'Zijn alle drie de melk volledig ondersteund door de Ramp?';
      $scope.M14b = 'Zijn alle drie de melk ondersteund door de Ramp en ze zijn de enige dingen die de ramp aanraken?';
      $scope.M14c = 'Zijn alle drie de melk volledig ondersteund door de Ramp en ze zijn de enige dingen die de ramp aanraken en staan ze allemaal rechtop?';
      $scope.M15 = 'ALLE MONSTERS';
      $scope.M15a = 'Zijn alle zeven mest monsters volledig in het trainings- en onderzoeksgebied?';
      $scope.Penalty = 'STRAFPUNTEN';
      $scope.Penaltya = 'Hoeveel mest monsters zijn er in het witte driehoek gebied?';

    });

  } else {

    menuApp.controller("MenuCtrl", function($scope) {

      $scope.Yes = 'Yes';
      $scope.No = 'No';
      $scope.Title = 'Animal Allies Scorer (v2.0)';
      $scope.Timers = 'Timers';
      $scope.Saves = 'Saves';
      $scope.Points = 'Points';

      $scope.M01 = 'Shark Shipment';
      $scope.M01a = 'Is the Tank and the Shark completely in Target 1 (Left Box?)';
      $scope.M01b = 'Is the Tank and the Shark completely in Target 2 (Right Box?)';
      $scope.M01c = 'Is the Shark only touching the tank floor?';
      $scope.M01d = 'Note: After Launch, nothing is allowed to touch the Shark except the Tank.';
      $scope.M02 = 'Service Dog Action';
      $scope.M02a = 'Is the Warning Fence down?';
      $scope.M02b = 'Note: Fence must be down because the Robot completely crossed it from the west, after traveling between the Barriers.';
      $scope.M03 = 'Animal Conservation';
      $scope.M03a = 'How many identical pairs of Animals are on both tables?';
      $scope.M03b = 'Note: Each pair must be created through rotation of the Animal Conservation Mission Model.';
      $scope.M04 = 'Feeding';
      $scope.M04a = 'How many pieces of Food are completely in the target areas?';
      $scope.M04b = 'Note: If multiple pieces of Food are in one area, all must match each other.';
      $scope.M05 = 'Biomimicry';
      $scope.M05a = 'Does the Biomimicry Wall support all the weight of the White Gecko?';
      $scope.M05b = 'Does the Biomimicry Wall support all the weight of the robot?';
      $scope.M05c = 'Note: No part of a scoring object may be in contact with anything but the Biomimicry Wall and/or Green Gecko, except two scoring objects may be in contact with each other.';
      $scope.M06 = 'Milking Automation';
      $scope.M06a = 'Has Milk and Manure rolled out?';
      $scope.M06b = 'Has all the Milk rolled out but not the Manure?';
      $scope.M06c = 'Note: The Robot’s only movement of the Milk and/or Manure came by moving the red lever';
      $scope.M07 = 'Panda Release';
      $scope.M07a = 'Is the slider fully open clockwise?';
      $scope.M08 = 'Camera Recovery';
      $scope.M08a = 'Is the Camera completely in Base?';
      $scope.M09 = 'Training and Research';
      $scope.M09a = 'Are the Dog and Trainer completely in the Training and Research Area?';
      $scope.M09b = 'Is the Zoologist completely in the Training and Research Area?';
      $scope.M09c = 'How many Manure Samples are completely in the Training and Research Area?';
      $scope.M09d = 'Note: Only one Manure Sample may be Transported at a time';
      $scope.M10 = 'Beekeeping';
      $scope.M10a = 'Is the Bee on the Beehive and there is no Honey in the Beehive?';
      $scope.M10b = 'Is the Bee on the Beehive and Honey is in base?';
      $scope.M11 = 'Prosthesis';
      $scope.M11a = 'Is the Prosthesis fitted to the Pet AND not held by the Referee?';
      $scope.M11b = 'Is the Prosthesis fitted to the Pet AND the Pet is completely in its Farm Target?';
      $scope.M12 = 'Seal in Base';
      $scope.M12a = 'Is the Seal completely in Base and not broken?';
      $scope.M13 = 'Milk in Base';
      $scope.M13a = 'Are three Milk completely in Base?';
      $scope.M14 = 'Milk on Ramp';
      $scope.M14a = 'Are all three Milk completely supported by the Ramp?';
      $scope.M14b = 'Are all three Milk completely supported by the Ramp AND they are the only things touching the Ramp?';
      $scope.M14c = 'Are all three Milk completely supported by the Ramp AND they are the only things touching the Ramp AND they are all standing?';
      $scope.M15 = 'All Samples';
      $scope.M15a = 'Are all seven Manure Samples completely in the Training and Research Area?';
      $scope.Penalty = 'Penalty';
      $scope.Penaltya = 'How many Manure Samples are in the white triangle area?';

    });
  }


  
