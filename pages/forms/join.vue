<template>
  <div class="join__container">
    <JoinForm :data="data" />
  </div>
</template>

<script>
import JoinForm from "@/components/request/JoinForm.vue";

export default {
  components: {
    JoinForm
  },
	mounted() {
		this.copyFunction()
	},
  computed: {
    data() {
      return this.$store.getters["lang/request/dataJoin"];
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
