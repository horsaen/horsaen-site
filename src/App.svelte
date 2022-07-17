<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './routes/Home.svelte';
</script>

<Router>
  <Route path='/' component='{Home}' />
</Router>