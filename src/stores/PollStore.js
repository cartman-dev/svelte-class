import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or JavaScript?",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: "Biggie or Tupac?",
    answerA: "Biggie",
    answerB: "Tupac",
    votesA: 12,
    votesB: 8,
  },
]);

export default PollStore;
