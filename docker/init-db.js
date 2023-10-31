db.createUser({
  user: 'sportenuser',
  pwd: 'p4ssw0rd!',
  roles: [
    {
      role: 'readWrite',
      db: 'sporten',
    },
  ],
});
