export class NewUser {
  constructor(name, email, password, gender, picture, smoker, year, bedTimePref, wakeTime, pets, smokerPref, generPref, tidynessPref, yearPref, tempPref, wakeTimePref){
    this.name = name;
    this.email = email;
    this.password = password;

    this.gender = gender;
    this.picture = picture;
    this.smoker = smoker;
    this.genderP = generPref;
    this.smokerP = smokerPref;
    this.year = year;
    this.tidynessP = tidynessPref;
    this.yearP = yearPref;
    this.tempP = tempPref;
    this.bedTimeP = bedTimePref;
    this.wakeTime = wakeTime;
    this.wakeTimeP = wakeTimePref;
    this.pets = pets;


  }
}
