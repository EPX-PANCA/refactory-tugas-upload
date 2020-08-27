<template>

<paginate
                name="Lsits"
                :listz="albumData"
                ref="paginator"
                class="paginate-list"
                :per="10">
</paginate>

 <paginate-links for="Lists" :show-step-links="true"></paginate-links>
            <span v-if="$refs.paginator" class="pb-5">
                Viewing
                {{$refs.paginator.pageItemsCount}}
                results
            </span>

</template>

<script>
export default {
    name:'Pagination',
    props:['listz']

}
</script>