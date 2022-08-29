<template>
  <div>
    <Header/>
    <slot/>
  </div>
</template>
<script>
import Header from "../Components/default/Header";
export default {
  components: {Header}
}
</script>