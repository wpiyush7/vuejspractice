import AssgignementListItem from "./AssgignementListItem.js";

export default {
    components: { AssgignementListItem },
    template: `
        <section v-show="filteredAssignments.length > 0">
            <h2 class="font-bold mb-2">{{ title }}
           ({{filteredAssignments.length}})
            </h2>

            <div>
                <button @click="currentTag = tag" 
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                class="{
                    'border-blue-500 text-blue-500' : tag === currentTag
                }">
                    {{tag}}
                </button>
            </div>
            <ul class="border border-gray-200 divide-y">
                <AssgignementListItem :assignments="filteredAssignments"></AssgignementListItem>
                
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
    data() {
        return {
            currentTag : 'all'
        };
    },
    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ["all",...new Set(this.assignments.map(a => a.tag))];
        }
    }
}
