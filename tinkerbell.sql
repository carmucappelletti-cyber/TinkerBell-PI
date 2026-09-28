-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2026 a las 23:57:55
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tinkerbell`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id_personaje` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `talento` varchar(150) NOT NULL,
  `aparicion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id_personaje`, `nombre`, `talento`, `aparicion`) VALUES
(1, 'Tinker Bell', 'Hada artesana', 'Toda la saga'),
(2, 'Rosetta', 'Hada del jardín', 'Toda la saga'),
(3, 'Periwinkle', 'Hada de la escarcha', 'Secret of the Wings'),
(4, 'Vidia', 'Hada de vuelo veloz', 'Toda la saga'),
(5, 'Iridessa', 'Hada de la luz', 'Toda la saga'),
(6, 'Silvermist', 'Hada del agua', 'Toda la saga'),
(7, 'Fawn', 'Hada de los animales', 'Toda la saga'),
(8, 'Zarina', 'Hada guardiana del polvo', 'The Pirate Fairy'),
(9, 'Queen Clarion', 'Reina de Pixie Hollow', 'Toda la saga'),
(10, 'Clank', 'Hado artesano', 'Toda la saga'),
(11, 'Bobble', 'Hado artesano', 'Toda la saga'),
(12, 'Fairy Mary', 'Líder de las hadas artesanas', 'Toda la saga'),
(13, 'Terence', 'Guardián del polvo de hada', 'Toda la saga'),
(14, 'Fairy Gary', 'Supervisor del polvo de hada', 'Toda la saga'),
(15, 'Nyx', 'Líder de las hadas exploradoras', 'Legend of the NeverBeast'),
(16, 'Chase', 'Hada exploradora', 'Legend of the NeverBeast'),
(17, 'Spike', 'Hada de la escarcha', 'Secret of the Wings'),
(18, 'Gliss', 'Hada de la escarcha', 'Secret of the Wings'),
(19, 'Dewey', 'Guardián del conocimiento', 'Secret of the Wings'),
(20, 'Sled', 'Hado del Bosque del Invierno', 'Secret of the Wings'),
(21, 'Lord Milori', 'Señor del Bosque del Invierno', 'Secret of the Wings');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `tipo_usuario` enum('usuario','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `email`, `contraseña`, `tipo_usuario`) VALUES
(1, 'Sofía', 'sofia@gmail.com', 'sofia123', 'usuario'),
(2, 'Tomás', 'tomas@gmail.com', 'tomas123', 'usuario'),
(3, 'Lucía', 'lucia@gmail.com', 'lucia123', 'usuario'),
(4, 'Mateo', 'mateo@gmail.com', 'mateo123', 'usuario'),
(5, 'Camila', 'camila@gmail.com', 'camila123', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id_personaje`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id_personaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
