<template>
  <v-flex xs12 lg10 offset-lg1 pb-3>
    <form v>
      <v-layout row wrap>
        <v-flex xs12 sm4 pa-1>
          <v-text-field
            v-model="firstName"
            :counter="15"
            :error-messages="firstNameErrors"
            label="First name"
            required
            @input="$v.firstName.$touch()"
            @blur="$v.firstName.$touch()"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-text-field
            v-model="lastName"
            :counter="15"
            :error-messages="lastNameErrors"
            label="Last name"
            required
            @input="$v.lastName.$touch()"
            @blur="$v.lastName.$touch()"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-select
            v-model="selectWine"
            required
            :items="$store.state.wineSelect"
            label="Wine"
            :error-messages="selectWineErrors"
            @input="$v.selectWine.$touch()"
            @blur="$v.selectWine.$touch()"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-select
            v-model="selectLiquor"
            required
            :items="$store.state.hardLiquorSelect"
            label="Hard liquor"
            :error-messages="selectLiquorErrors"
            @input="$v.selectLiquor.$touch()"
            @blur="$v.selectLiquor.$touch()"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-select
            v-model="selectDiet"
            required
            :items="$store.state.dietaryRequirements"
            label="Dietary requirements"
            :error-messages="selectDietErrors"
            @input="$v.selectDiet.$touch()"
            @blur="$v.selectDiet.$touch()"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-select
            v-model="selectAllergy"
            mt-0
            required
            attach
            small-chips
            multiple
            :items="$store.state.allergySelect"
            label="Allergies"
            :error-messages="selectAllergyErrors"
            @input="$v.selectAllergy.$touch()"
            @blur="$v.selectAllergy.$touch()"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-select
            v-model="selectTour"
            required
            :items="$store.state.tourSelect"
            label="Thursday morning city tour"
            :error-messages="selectTourErrors"
            @input="$v.selectTour.$touch()"
            @blur="$v.selectTour.$touch()"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm4 pa-1>
          <v-menu
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date"
              label="Arrival date in Kiev"
              prepend-icon="event"
              readonly
              :error-messages="dateErrors"
              @input="$v.date.$touch()"
              @blur="$v.date.$touch()"
            ></v-text-field>
            <v-date-picker v-model="date" 
              @input="menu = false" 
              :events="arrayEvents"
              event-color="primary"
              first-day-of-week="1"
              :min="new Date().toISOString().substr(0, 10)"
              max="2019-07-13"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>


      <v-layout align-center column>
        <v-flex xs12 sm4 pa-1>
          <v-text-field
            v-model="accessCode"
            :counter="12"
            :error-messages="accessCodeErrors"
            label="Access key"
            required
            @input="$v.accessCode.$touch()"
            @blur="$v.accessCode.$touch()"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout justify-space-between row>
        <v-btn color="primary" @click.prevent="clear">clear</v-btn>
        <v-btn color="primary" @click.prevent="submit">register</v-btn>
      </v-layout>
    </form>
    <v-btn color="primary" @click="getDataFromGoogle">Get Data</v-btn>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-flex>
</template>

<script>
// import { tryThis } from "../api/index.js";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
// import Axios from 'axios'

export default {
  mixins: [validationMixin],
  name: "AppRegister",
  validations: {
    firstName: { required, maxLength: maxLength(15) },
    lastName: { required, maxLength: maxLength(15) },
    email: { required, email },
    selectWine: { required },
    selectLiquor: { required },
    selectDiet: { required },
    selectTour: { required },
    selectAllergy: { required },
    accessCode: { required },
    date: { required }
  },

  data: () => ({
    arrayEvents: ["2019-07-13"],
    
    snackbar: false,
    y: 'top',
    x: null,
    mode: '',
    timeout: 6000,
    text: '',

    firstName: '',
    lastName: '',
    email: '',
    selectWine: null,
    selectLiquor: null,
    selectDiet: null,
    selectTour: null,
    selectAllergy: null,
    date: null,
    accessCode: '',

    menu: false
  }),

  computed: {
    accessCodeErrors() {
      const errors = [];
      if (!this.$v.accessCode.$dirty) return errors;
      !this.$v.accessCode.required && errors.push("Access key is required");
      return errors;
    },
    selectDietErrors() {
      const errors = [];
      if (!this.$v.selectDiet.$dirty) return errors;
      !this.$v.selectDiet.required &&
        errors.push("Please select your dietary requirements");
      return errors;
    },
    selectWineErrors() {
      const errors = [];
      if (!this.$v.selectWine.$dirty) return errors;
      !this.$v.selectWine.required &&
        errors.push("Please select your wine preferences");
      return errors;
    },
    selectLiquorErrors() {
      const errors = [];
      if (!this.$v.selectLiquor.$dirty) return errors;
      !this.$v.selectLiquor.required &&
        errors.push("Please select your hard liquor preferences");
      return errors;
    },
    selectTourErrors() {
      const errors = [];
      if (!this.$v.selectTour.$dirty) return errors;
      !this.$v.selectTour.required && errors.push("Please selecct an option");
      return errors;
    },
    selectAllergyErrors() {
      const errors = [];
      if (!this.$v.selectAllergy.$dirty) return errors;
      !this.$v.selectAllergy.required &&
        errors.push("Please select none if you have no allergies");
      return errors;
    },
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.maxLength &&
        errors.push("First name must be at most 15 characters long");
      !this.$v.firstName.required && errors.push("First name is required.");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength &&
        errors.push("Last name must be at most 15 characters long");
      !this.$v.lastName.required && errors.push("Last name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
        !this.$v.date.required && errors.push("Arrival date is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        if (this.accessCode == this.$store.state.accessCode) {
          this.asignValuesToStore();
          this.$http
          this.text='You have been successfully added to the guest list!';
          this.snackbar = true;
          this.clear();
        } else {
          this.text='Please provide a valid access key';
          this.snackbar = true;
        }
      }else {
        this.text='Please fill in all the fields';
        this.snackbar = true;
      }
    },
    clear() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.selectWine = null;
      this.selectLiquor = null;
      this.selectDiet = null;
      this.selectAllergy = null;
      this.selectTour = null;
      this.date = null;
      this.$v.$reset();
    },
    asignValuesToStore() {
      this.$store.state.userDetails.firstName = this.firstName;
      this.$store.state.userDetails.lastName = this.lastName;
      this.$store.state.userDetails.email = this.email;
      this.$store.state.userDetails.selectWine = this.selectWine;
      this.$store.state.userDetails.selectLiquor = this.selectLiquor;
      this.$store.state.userDetails.selectDiet = this.selectDiet;
      this.$store.state.userDetails.selectAllergy = this.selectAllergy;
      this.$store.state.userDetails.selectTour = this.selectTour;
      this.$store.state.userDetails.date = this.date;
    },
    getDataFromGoogle () {
      //  this.$index.tryThis("Print");
    }
  }
};
</script>



