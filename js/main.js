/**
 * @license Angular Cron Directive
 * (c) 2016. https://github.com/lechneal/angularui-cron-directives
 * License: MIT
 */
(function () {
	'use strict';

	angular.module('angularui-cron-directives', [])

	.constant("REPEAT_TYPE", {
        "UNIQUE": "unique",
        "REPEAT": "repeat",
        "DAILY": "daily",
        "WEEKLY": "weekly",
        "EXPERT": "expert",
        "EVERYDAY": "everyday",
        "EVERYXDAYS": "everyxdays",
        "SELECTEDDAYS": "selecteddays",
        "EVERYMONTH": "everymonth",
        "SELECTEDMONTHS": "selectedmonths"
    })
    .constant("TRANSLATIONS", {
		list_de: {
			EVENT_REPEAT_TYPE: "Wiederholungen",
			EVENT_REPEAT: "Wiederholend",
			EVENT_UNIQUE: "Einmalig",
			EVENT_REPEAT_T_DAYS: "an Tagen",
			EVENT_REPEAT_T_WEEKDAYS: "an Wochentagen",
			EVENT_REPEAT_T_WEEKS: "in Kalenderwochen",
			EVENT_REPEAT_T_MONTHS: "in Monaten",
			EVENT_REPEAT_T_ALL_DAYS: "alle Tage",
			EVENT_REPEAT_T_ALL_MONTHS: "alle Monate",
			STARTDATE: "Beginnt am",
			ENDDATE: "Endet am",
			STARTTIME: "Beginnt um",
			ENDTIME: "Endet um",
			DAILY: "Täglich",
			WEEKLY: "Wöchentlich",
			EXPERT_SETTINGS: "Experteneinstellungen",
			EVERYDAY: "Jeden Tag",
			SELECTDAYS: "Tage auswählen",
			EVERYMONTH: "Jeden Monat",
			SELECTWEEKS: "Kalenderwochen auswählen",
			SELECTMONTH: "Monate auswählen",
			DAYS: "Tage",
			MONTHS: "Monate",
			WEEKDAYS: "Wochentage",
			CRON_EXPRESSION: "Wiederholung",
			ADD_CRON_EXPRESSION: "Wiederholung hinzufügen",
			REPETITIONS: "Wiederholungen",
			MONDAY: "Montag",
			THUESDAY: "Dienstag",
			WEDNESDAY: "Mittwoch",
			THURSDAY: "Donnerstag",
			FRIDAY: "Freitag",
			SATURDAY: "Samstag",
			SUNDAY: "Sonntag"
		},
		list_en: {
			EVENT_REPEAT_TYPE: "Repetitions",
			EVENT_REPEAT: "Recurring",
			EVENT_UNIQUE: "Single",
			EVENT_REPEAT_T_DAYS: "on days",
			EVENT_REPEAT_T_WEEKDAYS: "on weekdays",
			EVENT_REPEAT_T_WEEKS: "in weeks",
			EVENT_REPEAT_T_MONTHS: "in months",
			EVENT_REPEAT_T_ALL_DAYS: "all days",
			EVENT_REPEAT_T_ALL_MONTHS: "all months",
			STARTDATE: "Start date",
			ENDDATE: "End date",
			STARTTIME: "Start time",
			ENDTIME: "End time",
			DAILY: "Daily",
			WEEKLY: "Weekly",
			EXPERT_SETTINGS: "Expert settings",
			EVERYDAY: "Every day",
			SELECTDAYS: "Select days",
			SELECTWEEKS: "Select weeks",
			EVERYMONTH: "Every month",
			SELECTMONTH: "Select month",
			DAYS: "Days",
			MONTHS: "Months",
			WEEKDAYS: "Weekdays",
			CRON_EXPRESSION: "Repetitions",
			ADD_CRON_EXPRESSION: "Add repetition",
			REPETITIONS: "Repetitions",
			MONDAY: "Monday",
			THUESDAY: "Tuesday",
			WEDNESDAY: "Wednesday",
			THURSDAY: "Thursday",
			FRIDAY: "Friday",
			SATURDAY: "Saturday",
			SUNDAY: "Sunday"
		},
		list_fr: {
			EVENT_REPEAT_TYPE: "Répétitions",
			EVENT_REPEAT: "Répétitif",
			EVENT_UNIQUE: "Unique",
			EVENT_REPEAT_T_DAYS: "les jours",
			EVENT_REPEAT_T_WEEKDAYS: "les jours de semaine",
			EVENT_REPEAT_T_WEEKS: "en semaines",
			EVENT_REPEAT_T_MONTHS: "les mois",
			EVENT_REPEAT_T_ALL_DAYS: "tous les jours",
			EVENT_REPEAT_T_ALL_MONTHS: "tous les mois",
			STARTDATE: "Date de début",
			ENDDATE: "Date de fin",
			STARTTIME: "Heure de début",
			ENDTIME: "Heure de fin",
			DAILY: "Tous les jours",
			WEEKLY: "Hebdomadaire",
			EXPERT_SETTINGS: "Paramètres d'expert",
			EVERYDAY: "Tous les jours",
			SELECTDAYS: "Sélectionner les jours ",
			SELECTWEEKS: "Sélectionner les semaines",
			EVERYMONTH: "Chaque mois",
			SELECTMONTH: "Sélectionner les mois",
			DAYS: "Jours",
			MONTHS: "Mois",
			WEEKDAYS: "Jours de la semaine",
			CRON_EXPRESSION: "Répétitions",
			ADD_CRON_EXPRESSION: "Ajouter répétitions",
			REPETITIONS: "Répétitions",
			MONDAY: "Lundi",
			THUESDAY: "Mardi",
			WEDNESDAY: "Mercredi",
			THURSDAY: "Jeudi",
			FRIDAY: "Vendredi",
			SATURDAY: "Samedi",
			SUNDAY: "Dimanche"
		},
		list_it: {
			EVENT_REPEAT_TYPE: "Ripetizioni",
			EVENT_REPEAT: "Ripetitivo",
			EVENT_UNIQUE: "Unico",
			EVENT_REPEAT_T_DAYS: "nei giorni",
			EVENT_REPEAT_T_WEEKDAYS: "nei giorni della settimana",
			EVENT_REPEAT_T_WEEKS: "nelle settimane",
			EVENT_REPEAT_T_MONTHS: "nei mesi",
			EVENT_REPEAT_T_ALL_DAYS: "tutti i giorni",
			EVENT_REPEAT_T_ALL_MONTHS: "tutti i mesi",
			STARTDATE: "Inizia il",
			ENDDATE: "Termina il",
			STARTTIME: "Inizia alle",
			ENDTIME: "Termina alle",
			DAILY: "Giornaliero",
			WEEKLY: "Settimanale",
			EXPERT_SETTINGS: "Impostazioni avanzate",
			EVERYDAY: "Ogni giorno",
			SELECTDAYS: "Seleziona giorni",
			SELECTWEEKS: "Seleziona settimane",
			EVERYMONTH: "Ogni mese",
			SELECTMONTH: "Seleziona mese",
			DAYS: "Giorni",
			MONTHS: "Mesi",
			WEEKDAYS: "Giorni della settimana",
			CRON_EXPRESSION: "Ripetizioni",
			ADD_CRON_EXPRESSION: "Aggiungere ripetizioni",
			REPETITIONS: "Ripetizioni",
			MONDAY: "Lunedì",
			THUESDAY: "Martedì",
			WEDNESDAY: "Mercoledì",
			THURSDAY: "Giovedì",
			FRIDAY: "Venerdì",
			SATURDAY: "Sabato",
			SUNDAY: "Domenica"
		}
    })
    
    .filter('range', function() {
		return function(input, start, end) {
			start = parseInt(start, 10);
			end = parseInt(end, 10);
	
			for (var i=start; i<=end; i++) {
				input.push(i);
			}
	
			return input;
		};
	})
	.filter('dateMoment', function () {
		return function (input, format) {
			return moment(input).format(format);
		};
	})
    
	.service('ACDService', function(REPEAT_TYPE){
		this.sortNumber = function (a,b) {
			return a - b;
		};
		this.calcCronExpr = function(cronData){
			var cronExpr = null;
			if (cronData.type == REPEAT_TYPE.UNIQUE){
				//Do nothing
			}else if (cronData.type == REPEAT_TYPE.REPEAT){
				//Add Sec, Min & Hours
				cronExpr = "0 0 ";
				if (cronData.cronRepetition == REPEAT_TYPE.DAILY){
					// Add Days
					if (cronData.dailyRepetition == REPEAT_TYPE.EVERYDAY){
						cronExpr += "* ";
					}else if (cronData.dailyRepetition == REPEAT_TYPE.EVERYXDAYS){
						if (cronData.everyXDays && cronData.everyXDays.length > 0){
							cronExpr += "*/" + cronData.everyXDays.sort(this.sortNumber) + " ";
						}else{ 
							cronExpr += "* ";
						}
					}else if (cronData.dailyRepetition == REPEAT_TYPE.SELECTEDDAYS){
						if (cronData.selectedDays && cronData.selectedDays.length > 0){
							cronExpr += cronData.selectedDays.sort(this.sortNumber).join(",") + " ";
						}else{
							cronExpr += "* ";
						}
					}
					// Add Months
					if (cronData.monthlyRepetition == REPEAT_TYPE.SELECTEDMONTHS){
						if (cronData.selectedMonths && cronData.selectedMonths.length > 0){
							cronExpr += cronData.selectedMonths.sort(this.sortNumber).join(",") + " ";
						}else{
							cronExpr += "* ";
						}
					}else{
						cronExpr += "* ";
					}
					// Add Weekdays
					cronExpr += "* "; 
				}
				if (cronData.cronRepetition == REPEAT_TYPE.WEEKLY){
					// Add Days
					cronExpr += "* "; 
					// Add Months
					if (cronData.monthlyRepetition == REPEAT_TYPE.SELECTEDMONTHS){
						if (cronData.selectedMonths && cronData.selectedMonths.length > 0){
							cronExpr += cronData.selectedMonths.sort(this.sortNumber).join(",") + " ";
						}else{
							cronExpr += "* ";
						}
					}else{
						cronExpr += "* ";
					}
					// Add Weekdays
					if (cronData.selectedWeekdays && cronData.selectedWeekdays.length > 0){
						cronExpr += cronData.selectedWeekdays.sort(this.sortNumber).join(",") + " ";
					}else{
						cronExpr += "* "; 
					}
				}
				if (cronData.cronRepetition == REPEAT_TYPE.EXPERT){
					//simply take the cron expression
					cronExpr = cronData.cronExpression;
				}else{
					cronData.cronExpression = cronExpr;
				}
			}
			return cronExpr;
		};
		this.parseCronExpression = function(cronExpression){		
			var cronData = {
					type: REPEAT_TYPE.REPEAT,
					cronRepetition: null,
					dailyRepetition: REPEAT_TYPE.EVERYDAY,
					everyXDays: 2,
					selectedDays: [],
					selectedWeekdays: [],
					monthlyRepetition: REPEAT_TYPE.EVERYMONTH,
					selectedWeeks: [],
					selectedMonths: [],
					cronExpression: ""
			};
			try{
				var parts = cronExpression.trim().split(/\s+/);
				//Ignore first to parts (min. & h.)
				var days = parts[2];
				var months = parts[3];
				var weekdays = parts[4];
				//Calc schedules
				var schedule = later.parse.cron(cronExpression);
				if (schedule && schedule.schedules.length > 0){
					schedule = schedule.schedules[0];

					var everyDay = (days == "*" || days == "?");
					var everyWeekday = (weekdays == "*" || weekdays == "?");
					var everyMonth = (months == "*" || months == "?");

					if (everyDay && !everyWeekday ){
						cronData.cronRepetition = REPEAT_TYPE.WEEKLY;
					}else if (everyWeekday){
						cronData.cronRepetition = REPEAT_TYPE.DAILY;
					}else{
						cronData.cronRepetition = REPEAT_TYPE.EXPERT;
					}
					cronData.dailyRepetition = (everyDay) ? REPEAT_TYPE.EVERYDAY : REPEAT_TYPE.SELECTEDDAYS;
					if (!everyMonth){
						cronData.monthlyRepetition = REPEAT_TYPE.SELECTEDMONTHS;
					}
					cronData.selectedDays = (days == "*" || days == "?") ? [] : schedule.D;
					if (schedule.d){
						cronData.selectedWeekdays = (weekdays == "*" || weekdays == "?") ? [] : schedule.d.map(function(v){return v - 1;});
					}
					if (schedule.M){
						cronData.selectedMonths = (months == "*" || months == "?") ? [] : schedule.M;
					}
				}else{
					cronData.cronRepetition = REPEAT_TYPE.EXPERT;
				}
			}catch(e){
				cronData.cronRepetition = REPEAT_TYPE.EXPERT;
			}
			cronData.cronExpression = cronExpression;
			return cronData;
		};
	})

	.directive("ngCronInput", function ( $timeout, ACDService, REPEAT_TYPE) {
		return {
			templateUrl: 'cronExpressionInput.tpl.html',
			restrict: 'E',
			require: '^ngModel',
			scope: {
				ngModel: '='
			},
			controller:function($scope, REPEAT_TYPE) {
				$scope.cronData = {
						type: REPEAT_TYPE.REPEAT,
						cronRepetition: null,
						dailyRepetition: REPEAT_TYPE.EVERYDAY,
						everyXDays: 2,
						selectedDays: [],
						selectedWeekdays: [],
						monthlyRepetition: REPEAT_TYPE.EVERYMONTH,
						selectedWeeks: [],
						selectedMonths: [],
						cronExpression: ""
				};
				$scope.selectTab = function(tab){
					$scope.cronData.cronRepetition = tab;
				};
				$scope.REPEAT_TYPE = REPEAT_TYPE;
			},
			link: function(scope, element, attrs, controller) {		
				//Handle changes of the input field
				scope.$watch('cronData', function(newVal, oldVal){
					if (newVal && newVal !== oldVal){
						var newCronExpression = ACDService.calcCronExpr(scope.cronData);
						if (scope.ngModel !== newCronExpression){
							scope.ngModel = newCronExpression;
						}
					}
				}, true);
				
				//Handle changes of ngModel
				scope.$watch('ngModel', function(newVal, oldVal){
					if (newVal && newVal !== oldVal && newVal !== scope.cronData.cronExpression){
						scope.cronData = ACDService.parseCronExpression(newVal);

						//Set active tab
						var tmpRepeatType = scope.cronData.cronRepetition;
						$timeout(function(){
							scope.$apply(function () {
								if(tmpRepeatType == REPEAT_TYPE.DAILY){
									scope.activeTab = 1;
								}else if (tmpRepeatType == REPEAT_TYPE.WEEKLY){
									scope.activeTab = 2;
								}else {
									scope.activeTab = 3;
								}
							});
						});
					}
				}, true);
			}
		};
	})

	.directive("ngCronDisplay", function ($timeout, REPEAT_TYPE) {
		return {
			templateUrl: 'cronDisplay.tpl.html',
			restrict: 'E',
			require: '^ngModel',
			scope: {
				ngModel: '='
			},
			controller: function($scope) {
				$scope.cron = {};
				$scope.showCron = true;
				$scope.formatDays = function(v){
					return moment().day(v - 1).format('ddd');
				};
				$scope.formatMonths = function(v){
					return moment().month(v - 1).format('MMM');
				};
			},
			link: function(scope, element, attrs, controller) {
				scope.$watch('ngModel', function(newVal){
					if (newVal){
						scope.cron = {};
						scope.cronExpression = newVal;
						scope.showCron = true;
						try{
							//Split cron
							var parts = newVal.trim().split(/\s+/);
							if (parts.length > 5){
								weeks = parts[6];
							}

							var cronExpression = newVal;

							var s = later.parse.cron(cronExpression);
							if (s && s.schedules && s.schedules.length > 0){
								if (s.schedules[0].D){
									scope.cron.selectedDays = s.schedules[0].D.join(",");
								}
								if (s.schedules[0].d){
									scope.cron.selectedWeekdays = s.schedules[0].d.map(scope.formatDays).join(",");
								}
								if (s.schedules[0].M){
									scope.cron.selectedMonths = s.schedules[0].M.map(scope.formatMonths).join(",");
								}
								scope.showCron = false;
							}
						}catch(e){
							//Ignore error and show cron epxression
						}
					}
				});
			}
		};
	})

	.directive("ngNextCronDates", function ($timeout, REPEAT_TYPE) {
		return {
			templateUrl: 'cronNextDates.tpl.html',
			restrict: 'E',
			require: '^ngModel',
			scope: {
				ngModel: '=',
				previewCount: '@',
				dateFormat: '@'
			},
			controller: function($scope) {
				$scope.nextDates = [];
				$scope.show = false;
				$scope.sortNumber = function (a,b) {
					return a - b;
				};
			},
			link: function(scope, element, attrs, controller) {
				scope.$watch('ngModel', function(newVal){
					if (newVal){
						scope.nextDates = [];
						try{
							//Split cron
							var parts = newVal.trim().split(/\s+/);
							var cronExpression = newVal;

							//Calc next dates
							var s = later.parse.cron(cronExpression);
							if (s && s.schedules && s.schedules.length > 0){
								if (s.schedules[0].M) {
									s.schedules[0].M.sort(scope.sortNumber);
								}
								if (s.schedules[0].D) {
									s.schedules[0].D.sort(scope.sortNumber);
								}
								if (s.schedules[0].d) {
									s.schedules[0].d.sort(scope.sortNumber);
								}

								scope.nextDates = later.schedule(s).next(scope.previewCount);
								scope.show = true;
							}
						}catch(e){
							scope.show = false;
						}
					}
				});
			}
		};
	})

	;
	

})();
