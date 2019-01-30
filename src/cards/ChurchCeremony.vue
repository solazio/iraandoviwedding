<template>
    <v-flex xs12 lg10 offset-lg1 pb-3>
        <v-card color="secondary" class="grey--text text--darken-4">
                <v-img
        :src="require('../assets/st-volodmyrs-cathedral.jpg')" alt="st volodmyrs cathedral kiev"
        aspect-ratio="1.8"
        ></v-img>
            <v-card-text>
            <div>
                <div class="headline">Church Ceremony</div>
                <div>
                <v-icon class="body-2">access_alarm</v-icon>
                Friday 2:00 PM
                </div>
                <div>
                <v-icon>place</v-icon>
                <a href="https://www.google.com/maps/place/St.+Volodymyr's+Cathedral/@50.4442142,30.5021347,16.38z/data=!4m5!3m4!1s0x40d4cef7c7731ddd:0x37cc95586b807512!8m2!3d50.4449191!4d30.5087329" class="link-style">Володимирський кафедральний собор, бульвар Тараса Шевченка, 20, Київ</a>
                </div>
            </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-text class="text-xs-left">
                <div>
                    <div class="subheading">The church wedding ceremony will take place on Friday, July 12th at 2.00 PM at St Volodymyr's Cathedral in Kiev. Everyone is welcomed to join us while we talk to God.
                    </div>
                </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3 text-xs-left">
            Attendance is optional
            <v-spacer></v-spacer>

            <v-icon class="green--text text--darken-1">location_city</v-icon>
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