<template>
    <v-footer dark color="primary" app>
        <v-flex
        text-xs-center
        xs12
      >
        Copyright &copy; 
            <a href="http://photographyos.com">photographyOS.com</a> 2019
      </v-flex>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

a {

    text-decoration: none;
}

/* unvisited link */
a:link {
  color: #212121;
}

/* visited link */
a:visited {
  color: #212121;
}

/* mouse over link */
a:hover {
  color: white;
}

/* selected link */
a:active {
  color: #212121;
} 
</style>
