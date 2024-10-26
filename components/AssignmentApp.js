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
            assignments: [
                {id:1, name: "Finish Project", complete: false },
                { id:2,name: "Finish Chapter 4", complete: false },
                { id:3,name: "Turn in Homework", complete: false }
            ]
        };
    },
    methods: {
        add(value) {

            this.assignments.push(value);


        },
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
