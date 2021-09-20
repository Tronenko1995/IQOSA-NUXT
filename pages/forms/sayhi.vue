<template>
  <div class="sayhi__container">
    <SayHiForm :data="data" />
  </div>
</template>

<script>
import SayHiForm from "@/components/request/SayHiForm.vue";

export default {
  components: {
    SayHiForm
  },
	mounted() {
		this.copyFunction()
	},
  computed: {
    data() {
      return this.$store.getters["lang/request/dataSayHi"];
    }
  },
  methods: {
		copyFunction() {
			document.oncopy = function () {
				let bodyElement = document.body
				let selection = getSelection()
				let href = document.location.href
				let copyright = "<br><br>Источник: <a href='"+ href +"'>" + href + "</a><br>©  IQOSA  "
				let text = selection + copyright
				let divElement = document.createElement('div')
				divElement.style.position = 'absolute'
				divElement.style.left = '-99999px'
				divElement.innerHTML = text
				bodyElement.appendChild(divElement)
				selection.selectAllChildren(divElement)
				setTimeout(function() { 
					bodyElement.removeChild(divElement)
				}, 0)
			}
		},
  }
};
</script>

<style lang="scss" scoped></style>
