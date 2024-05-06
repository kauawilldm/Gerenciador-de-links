CREATE TABLE `usuario` (
  `id` integer PRIMARY KEY,
  `nome` varchar(255),
  `email` varchar(255),
  `senha` varchar(255)
);

CREATE TABLE `categoria` (
  `id` integer PRIMARY KEY,
  `nome_categoria` varchar(255),
  `link_id` varchar(255),
  `usuario_id` varchar(255)
);

CREATE TABLE `links` (
  `id` integer PRIMARY KEY,
  `titulo` varchar(255),
  `descricao` text,
  `usuario_id` integer,
  `url` varchar(255)
);

ALTER TABLE `categoria` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

ALTER TABLE `links` ADD FOREIGN KEY (`id`) REFERENCES `categoria` (`link_id`);
