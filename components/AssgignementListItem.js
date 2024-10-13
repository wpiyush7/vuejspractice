export default {
    template: `
        <li v-for="assignment in assignments" :key="assignment.name" 
        class="p-2 flex justify-between items-center">
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.complete" 
            class="ml-4"/>
        </li>
            `,
    props: {

        assignments: {
            type: Array,
            default: []
        }
    }
}
