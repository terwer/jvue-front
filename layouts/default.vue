<template>
  <div>
    <Header/>
    <slot/>
  </div>
</template>
<script>
import Header from "../components/default/Header";
export default {
  components: {Header}
}
</script>