<template>
    <v-flex xs12 lg10 offset-lg1 pb-3>
        <v-card color="secondary" class="grey--text text--darken-4">
                <v-img
        :src="require('../assets/golden-gate.jpg')" alt="golden gate kiev"
        aspect-ratio="2"
        ></v-img>
            <v-card-text>
            <div>
                <div class="headline">City Tour</div>
                <div>
                <v-icon class="body-2">access_alarm</v-icon>
                Friday 5:00 PM
                </div>
                <div>
                <a href="https://www.google.com/maps/place/Golden+Gate,+Kiev,+Volodymyrska+St,+40А,+Kyiv,+Ukraine,+02000/@50.4488353,30.5111427,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce59bb472067:0x78e3f901cddf2fe7!8m2!3d50.4488319!4d30.5133314" class="link-style">
                <v-icon>place</v-icon>
                Golden Gate, Kiev, Volodymyrska Street, Kyiv, Ukraine
                </a>
                </div>
            </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-text class="text-xs-left">
                <div>
                    <div class="subheading">For those interested we will organise a city tour on Thursday, July 11th. We believe this is a good opportunity to discover the city and also bound with the other wedding guests. Everyone will meet at the Golden Gate.
                    </div>
                </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3 text-xs-left">
            Look for a Bloomberg umbrella
            <v-spacer></v-spacer>
            <v-icon class="deep-orange--text">favorite</v-icon>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<style scoped>
.link-style {

    text-decoration: none;
}

/* unvisited link */
.link-style:link {
  color: #b46494;
}

/* visited link */
.link-style:visited {
  color: #b46494;
}

/* mouse over link */
.link-style:hover {
  color: #F50057;
}

/* selected link */
.link-style:active {
  color: #b46494;
} 
</style>