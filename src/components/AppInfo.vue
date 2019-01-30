<template>
  <span class="text-xs-center">
    
    <Info/>

    <HowToGetThere/>

    <Kiev/>

    <CityTour/>

    <ChurchCeremony/>

    <Wedding/>

  </span>
</template>


<script>
import Info from '../cards/Info'
import HowToGetThere from '../cards/HotToGetThere'
import Kiev from '../cards/Kiev'
import ChurchCeremony from '../cards/ChurchCeremony'
import Wedding from '../cards/Wedding'
import CityTour from '../cards/CityTour'
export default {
   name: 'AppInfo',
   components: {
      Info,
      HowToGetThere,
      Kiev,
      CityTour,
      Wedding,
      ChurchCeremony 
    },
}
</script>


