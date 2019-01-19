<template>
    <div class="users">
        <h1>Users</h1>
        <form>
            <input type="text" placeholder="Enter Name" v-model="newUser.name" />
            <br />
            <input type="text" placeholder="Enter Email" v-model="newUser.email" />
            <br />
            <input type="submit" value="submit" v-on:click="addUser" />
        </form>
        <ul>
            <li v-for="user in users" v-bind:key="user.id" >
                <input type="checkbox" v-model="user.contacted" />
                <span :class="{contacted: user.contacted}">
                    {{user.name}}: {{user.email}}
                </span>
                <button v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      newUser: {},
      users: []
    };
  },
  methods: {
    addUser: function(e) {
      this.users.push({
        id: Date.now() * Math.random(),
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      this.newUser = {};
      e.preventDefault();
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function() {
    this.$http.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.users = res.data;
    });
  }
};
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>
