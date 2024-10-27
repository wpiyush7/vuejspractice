import AssgignementListItem from "./AssgignementListItem.js";

export default {
    components: { AssgignementListItem },
    template: `
        <section v-show="assignments.length > 0">
            <h2 class="font-bold mb-2">{{ title }}
           ({{assignments.length}})
            </h2>

            <div>
                <button v-for="tag in tags">{{tag}}</button>
            </div>
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
    },
    computed: {
        tags() {
            return ["one",'two','three'];
        }
    }
}
