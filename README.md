# UsersFilterProject

Este projeto é um aplicativo de filtros de usuários desenvolvido com Angular.

## Principais Métodos

### Filtro por Nome

Este método permite filtrar usuários pelo nome. Ele utiliza a função `filterByName` que recebe uma lista de usuários e um nome como parâmetros e retorna uma nova lista contendo apenas os usuários cujo nome corresponde ao parâmetro fornecido.

```typescript
filterByName(users: User[], name: string): User[] {
  return users.filter(user => user.name.includes(name));
}
```

### Filtro por Idade

Este método permite filtrar usuários por idade. A função `filterByAge` recebe uma lista de usuários e uma idade como parâmetros e retorna uma nova lista contendo apenas os usuários cuja idade corresponde ao parâmetro fornecido.

```typescript
filterByAge(users: User[], age: number): User[] {
  return users.filter(user => user.age === age);
}
```

### Filtro por Localização

Este método permite filtrar usuários pela localização. A função `filterByLocation` recebe uma lista de usuários e uma localização como parâmetros e retorna uma nova lista contendo apenas os usuários cuja localização corresponde ao parâmetro fornecido.

```typescript
filterByLocation(users: User[], location: string): User[] {
  return users.filter(user => user.location.includes(location));
}
```

## Como Executar

Para iniciar o servidor de desenvolvimento local, execute:

```bash
ng serve
```

Depois que o servidor estiver em execução, abra seu navegador e navegue até `http://localhost:4200/`.

## Construção

Para construir o projeto, execute:

```bash
ng build
```

Isso compilará seu projeto e armazenará os artefatos de construção no diretório `dist/`.

## Testes

Para executar testes unitários, use o seguinte comando:

```bash
ng test
```

Para testes de ponta a ponta (e2e), execute:

```bash
ng e2e
```

## Recursos Adicionais

Para mais informações sobre o Angular CLI, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
