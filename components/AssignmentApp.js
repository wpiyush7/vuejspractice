import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },
    template: `
    <section class="space-y-6">
        <assignment-list 
            :title="'In Progress'" 
            :assignments="filters.progress">
        </assignment-list>

        <assignment-list 
            :title="'Completed'" 
            :assignments="filters.completed">
        </assignment-list>

       <assignment-create @add-assignment="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            newAssignment: '',
            assignments: []
        };
    },
    methods: {
        add(value) {

            this.assignments.push(value);


        },
    },
    created() {
        fetch('http://localhost:3001/assignments').then(response => response.json())
            .then(data => {
                this.assignments = data;
            })
    },
    computed: {
        // inProgressAssignments() {
        //     return this.assignments.filter(assignment => !assignment.complete);
        // },
        // completedAssignments() {
        //     return this.assignments.filter(assignment => assignment.complete);
        // }
        filters() {
            return {
                progress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    }
}
