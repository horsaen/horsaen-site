<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  console.log('// HORSAEN //')
</script>

<Router>
  <Route path='/' component='{Home}' />
</Router>