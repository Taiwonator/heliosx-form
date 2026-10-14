export interface Question {
    id: string,
    label: string,
    order: number
}

export interface AnsweredQuestion extends Question {
    answer: boolean
}

const questionService = {

    getQuestions: () => [
        {
            id: "uuid1",
            label: "Have you ever had an allergic reaction after eating a Genovian Pear?",
            order: 0
        },
        {
            id: 'uuid2',
            label: "Have you experienced difficulty breathing during an allergic reaction?",
            order: 2
        },
        {
            id: 'uuid3',
            label: "Have you ever required emergency medical treatment for an allergic reaction?",
            order: 1
        },
        {
            id: 'uuid4',
            label: "Are you currently taking any medication to manage your allergies?",
            order: 3
        },
        {
            id: 'uuid5',
            label: "Have you previously been prescribed medication for a Genovian Pear allergy?",
            order: 4
        },
    ],
    submit: (data: AnsweredQuestion[]) => {
        console.log('Data: ', data)
    }
}

export { questionService }
