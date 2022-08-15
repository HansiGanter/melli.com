<template>
  <MobileCartTotal />
  <Container class="pt-4 lg:pt-8">
    <div class="grid gap-8 content-start">
      <div class="grid lg:grid-cols-5 grid-cols-1 gap-8">
        <Stepper class="lg:col-span-3" />
      </div>
      <div class="grid lg:grid-cols-5 grid-cols-1 gap-8">
        <RouterView class="lg:col-span-3" />
        <CartTotal class="hidden lg:grid lg:col-span-2" />
      </div>
    </div>
  </Container>
</template>
