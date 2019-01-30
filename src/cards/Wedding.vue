<template>
    <v-flex xs12 lg10 offset-lg1 pb-3>
        <v-card color="accent" class="grey--text text--darken-4">
                <v-img
        :src="require('../assets/ovi-and-ira.jpg')" alt="engaged couple engagement ring"
        aspect-ratio="1.5"
        ></v-img>
            <v-card-text>
            <div>
                <div class="headline">Wedding</div>
                <div>
                <v-icon class="body-2">access_alarm</v-icon>
                Saturday 5:00 PM
                </div>
                <div>
                <v-icon>place</v-icon>
                <a href="https://www.google.com/maps/place/The+GRAND+Place/@50.5316046,30.5273837,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4d2312b47f825:0x2aca381fb1cea3d5!8m2!3d50.5316012!4d30.5295724" class="link-style">The GRAND Place, Pryrichna Street, Kiev, Ukraine</a>
                </div>
            </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-text class="text-xs-left">
                <div>
                    <div class="subheading">We are delighted to share our special day with all of you. Loking forward to making great memories with our families and dearest friends at this international party. Join us for a wonderful evening of merriment and marriage.
                    </div>
                </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3 text-xs-left">
            The party you'll remember
            <v-spacer></v-spacer>

            <v-icon class="purple--text ">sentiment_very_satisfied</v-icon>
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
  color: #212121;
}

/* visited link */
.link-style:visited {
  color: #212121;
}

/* mouse over link */
.link-style:hover {
  color: white;
}

/* selected link */
.link-style:active {
  color: #212121;
} 
</style>