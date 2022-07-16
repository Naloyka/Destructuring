export default function showSpecialAttack(character) {
  const arr = [];

  const specialAttack = character.special;
  specialAttack.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    arr.push({
      id, name, icon, description,
    });
  });

  return arr;
}
