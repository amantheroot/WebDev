<template>
    <div class="test">
        <h1>VUE</h1>

        <h1>{{title}}</h1>
        <p>{{paragraph}}</p>
        <h2>{{ship.name}}</h2>

        <span v-text="text"></span>
        <span v-html="heading"></span>

        <code v-if="showDat">{{Dat}}</code>
        <code v-if="Dat.length">{{Dat}}</code>
        <code v-else>Nothing</code>

        <ul>
            <li v-for="d in Dat" v-bind:key="d"><h1>{{d}}</h1></li>
        </ul>

        <h2>{{change}}</h2>
        <input type="text" v-model="change" />

        <button v-on:click="clicked">Click Me</button>
        <input type="text"
        v-on:keyup="KeyPressed"
        v-on:keyup.enter="Hitenter" />

        <h3>First Name: {{firstName}}</h3>
        <h3>Middle Name: {{middleName}}</h3>
        <h3>Last Name: {{lastName}}</h3>
        <input type="text" v-model="firstName" />
        <input type="text" v-model="middleName" />
        <input type="text" v-model="lastName" />
        <h2>{{fullName}}</h2>

        <h3>This is a Property:</h3>
        <span>{{firstProp[3]}}</span>
        <span>{{anotherProp}}</span>
    </div>
</template>

<script>
export default {
  name: "test",
  props: {
    firstProp: {
      type: Array,
      default: function() {
        return [1, 2, 3, 42];
      }
    },
    anotherProp: {
      type: String,
      required: true,
      default: "It"
    }
  },
  data() {
    return {
      title: "Head",
      paragraph: "Paragraph.",
      ship: {
        name: "Boaty McBoatFace",
        size: 104,
        color: "red"
      },
      text: "A Simple Text",
      heading: "<h1>I'm A Heading</h1>",
      showDat: true,
      Dat: [1, 2, 3, 4, 5, 6],
      Present: "Slim Shady",
      change: "Change Me",
      firstName: "Aman",
      middleName: "Nan",
      lastName: "Kumar"
    };
  },
  methods: {
    clicked: function() {
      alert("Wierd Flex But Ok");
    },
    KeyPressed: function(e) {
      console.log(e.key);
    },
    Hitenter: function(e) {
      console.log(e.target.value);
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.middleName + " " + this.lastName;
    }
  }
};
</script>

<style>
</style>