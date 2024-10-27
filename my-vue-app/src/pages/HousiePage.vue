<script lang="ts" setup>
import NumberList from '../components/housie/NumberList.vue';
import TicketList from '../components/housie/TicketList.vue';
import PageLayout from '../layouts/PageLayout.vue';
</script>

<template>
    <PageLayout>
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 p-4"> <!-- col-md-4 -->
                <NumberList />
            </div>
            <div class="w-full md:w-2/3 p-4"> <!-- col-md-8 -->
                <TicketList />
            </div>
        </div>
    </PageLayout>
</template>
