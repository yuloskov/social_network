const testPosts = [
  {
    id: 1,
    text: `Идёт негр по жаркой пустыне, встречает кувшин, протирает его, думая, что там вода, но оттуда вылезает Джин. Джин говорит ему:" спасибо, что выпустил меня, за это я исполню 3 твоих желания!"
Негр не задумываясь говорит:" я хочу, чтобы рядом была вода".
Джин отвечает:"а второе желание?"
Негр отвечает:"чтобы я был белым".
Джин снова спрашивает:"а третье желание?"
Негр, задумавшись ответил: "хочу жить рядом с оазисом!"
И Джин исполнил его желания
И стал негр жить в Болгарии, как беглый иммигрант с водкой, зато рядом с Азисом
Джинн был глуховат`,
    date: "2021-01-01",
    author: {
      id: 1,
      name: "Egor",
    },
  },
  {
    id: 2,
    text: `Радист передает начальству сообщение. Товарищ командир — от штаба, по которому надо было произвести бомбовый удар не осталось ничего. По буквам: Николай, Иван, Харитон, Ульяна, Яков. Еще раз повторяю — Ничего.`,
    date: "2021-01-02",
    author: {
      id: 1,
      name: "Egor",
    },
  },
  {
    id: 3,
    text: `Рейс в Америку. В аэропорту Тель–Авива идет посадка на рейс американской авиакомпании. Стюард видит, что 50 мест в первом классе заняли богатые евреи, и думает "Если хорошо их обслужу, дадут по десятке на чай, и будет у меня 500$..." 
Весь полет он вокруг них прыгал, воду–коньяк–таблетки–пледы подавал, из сил выбился. Сели в Нью–Йорке, он уже карманы приготовил. 
Выходят евреи. Первый говорит: 
- Я в жизни много летал, но никто, никогда не обслуживал меня так, как Вы. Спасибо. 
Пожал руку и ушел. 
Второй: 
- Спасибо. Пожал руку и ушел. … 
И так 49 человек. Стюард в ступоре. 
Последний, маленький старичок, все то же самое сказал и добавил: 
- Мы тут с друзьями решили Вас отблагодарить… И протягивает стюарду чек на $ 1000. 
Стоит стюард на трапе, машет чеком вслед евреям и шепчет: 
— Евреи, евреи… может быть, вы и не убивали Христа… Но я представляю, как же вы его мучили!`,
    date: "2021-01-02",
    author: {
      id: 2,
      name: "Artem",
    },
  },
] as PostData[];

export interface PostData {
  id: number;
  text: string;
  date: string;
  author: {
    id: number;
    name: string;
  };
}

export const getPosts = async () => {
  return Promise.resolve(testPosts);
};

export const newPost = async (text: string) => {
  return Promise.resolve({
    id: Date.now(),
    text,
    date: new Date().toISOString(),
    author: {
      id: 2,
      name: "Artem",
    },
  });
};
