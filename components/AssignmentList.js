import AssgignementListItem from "./AssgignementListItem.js";

export default {
    components: { AssgignementListItem },
    template: `
        <section v-show="assignments.length > 0">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul class="border border-gray-200 divide-y">
                <AssgignementListItem :assignments="assignments"></AssgignementListItem>
                
            </ul>
        </section>
    `,
    props: {
        title: {
            type: String,
            default: 'Assignment'
        },
        assignments: {
            type: Array,
            default: []
        }
    }
}
