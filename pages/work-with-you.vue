<template>
    <main>
        <Request :type="'workWithYou'"/>
    </main>
</template>

<script>
import Request from '@/components/request/Request.vue'
export default {
    layout: 'standart',
    components: {
		Request,
    },
}
</script>