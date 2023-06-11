# Cliente móvil

La versión móvil de la app adapta las principales funciones de la versión web para hacerlas lo más portátiles posibles. Podemos gestionar todos nuestros proyectos, así como nuestras amistades y logros.

La versión móvil también puede cambiar entre el modo claro y oscuro según las preferencias del usuario. Para esta versión se ha utilizado **React Native** con **TSX**, la cual es una extensión de la sintaxis **TypeScript** que proporciona una forma de estructurar la representación de componentes utilizando una sintaxis familiar para muchos desarrolladores que se usa comúnmente en React.

## Instalación

Para poder utilizar esta versión del proyecto es necesario contar con un emulador Android, los cuales se pueden obtener descargando el **IDE Android Studio**. Una vez que lo descarguemos tendremos que crear un dispositivo virtual con un **nivel de API mínimo de 30** y ejecutarlo.

Tras clonar el repositorio y tener en funcionamiento el emulador, podemos ejecutar el programa con el comando:

```sh
npm run android
```

## Estructura

La versión móvil se estructura en dos grupos principales de screens entre los que se distribuyen todas las pantallas de la app: **AccountStack** y **MainNavigationComponent**.

### AccountStack

Stack con todas las pantallas relacionadas con la gestión de la cuenta del usuario, si no se está logueado se mantiene en esta pila. Las pantallas que encontramos aquí son:

- **LoginScreen:** Pantalla para el inicio de sesión.

- **RegisterScreen:** Pantalla para el registro de cuenta.

- **RecoverPasswordScreen:** Pantalla para la recuperación de contraseña, aquí se ingresa un email de recuperación.

- **NewPasswordScreen:** Pantalla para cambiar la contraseña, aquí podemos establecer nuestra nueva clave de acceso.

### MainNavigationComponent:

Componente de navegación con todas las pantallas a las que el usuario puede acceder, al iniciar sesión el usuario es redirigido a esta componente. Este está compuesto de cuatro partes secciones principales:

- **MainStack:** Stack principal de la app, aquí se encuentran todas las pantallas relacionadas con los proyectos.

- **Friends:** Todas las pantallas relacionadas con la gestión de las amistades del usuarios.

- **Notifications:** Pantalla donde se almacenan todas las notificaciones que recibe el usuario.

- **Profile:** Stack con todas las pantallas relacionadas con la gestión del perfil del usuario; así como sus logros, historial de actividad y proyectos. Los ajustes de la app también se encuentran en esta pila.

Se hablará más en detalle de estas cuatro partes en el apartado de _“Flujos de navegación”_.

## Componentes personalizados

La versión móvil cuenta con varios componentes propios creados para las diferentes pantallas, entre ellos hay:

- **AchievementComponent:** Componente que contiene la información de un logro: icono, nombre, descripción y porcentaje obtenido por el usuario.

- **AppComponent:** Componente que contiene la información de una aplicación: nombre, descripción y botones para su gestión.

- **BoardComponent:** Componente que contiene la información de una pizarra: photo, título, botones para su gestión.

- **ButtonComponent:** Botón personalizado con diferentes estilos: color claro o oscuro, tamaño pequeño o grande: además de modos: normal, github, google.

- **ColumnComponent:** Componente que contiene la información de una columna: título y botones para su gestión; además de la lista de tareas que la componen.

- **DividerComponent:** Componente de diseño para colocar una división con texto en su interior.

- **FriendComponent:** Componente que contiene la información de un amigo: foto de perfil, nombre y botones para su gestión.

- **LevelProgressComponent:** Componente que muestra el progreso de nivel del usuario mediante una barra de progreso circular, además de su nivel en el interior.

- **LoadingComponent:** Componente para mostrar la carga de contenido en la app mientras que se esperan los datos del backend.

- **LoginInputComponent y LoginInputPassComponent:** Componentes para los campos de texto de registro e inicio de sesión. Estos controlan los errores de formato mediante un esquema de validación de **Yup**.

- **MemberComponent:** Componente que contiene la información de un miembro de un proyecto: foto de perfil, nombre y rol dentro del proyecto.

- **ModalConfirmComponent:** Componente modal para la confirmación de acciones, este cuenta con un mensaje informativo de la acción así como los botones necesarios para su gestión.

- **NotificationComponent:** Componente que muestra la información de una notificación: título y mensaje.

- **PopupNotificationComponent:** Componente que actúa como una notificación emergente, mostrando el título y el mensaje de la misma. Este componente tiene dos modos: success y error; según el elegido se cambiará el icono que aparecerá.

- **ProjectComponent:** Componente que muestra la información de un proyecto: nombre, descripción y botones para su gestión.

- **TaskComponent:** Componente que muestra la información de una tarea: título, descripción y botones para su gestión.

El estilo y diseño utilizado para los componentes se detallará en el apartado _“Estilos y diseño”_.

## Flujos de navegación

La versión móvil cuenta con dos flujos principales de navegación para acceder a todas las pantallas que componen la app:

### Flujo para la gestión de la cuenta:

Este flujo se basa en las pantallas del **AccountStack** para todas las acciones relacionadas con la cuenta del usuario. La navegación de este flujo consiste en:

- Podemos navegar entre **LoginScreen** y **RegisterScreen** para iniciar sesión o registrar una cuenta.

- Desde **LoginScreen** podemos recuperar nuestra contraseña con las pantallas **RecoverPasswordScreen** y **NewPasswordScreen**, siempre pudiendo volver atrás en todo momento.

### Flujo principal de la aplicación:

Este flujo se basa en las pantalla del **MainNavigationComponent** para todas las acciones que componen la app en sí. La navegación de este flujo consiste en:

- La app principal se mueve entre cuatro pilas de pantallas, pudiendo navegar en todo momento entre ellas: **MainStack**, **Friends**, **Notifications** y **Profile**.

#### MainStack:

- Desde **MainStack** podemos utilizar las pantallas relacionadas con los proyectos y su gestión: **ProjectsListScreen**, **CreateProject** y **EditProjectScreen**.

- Podemos acceder a los proyectos desde sus correspondientes componentes, entrando de esta manera en la pantalla **ProjectsSingleScreen**. Esta screen nos permite navegar entre **ProjectsAppsScreen** y **ProjectsMembersScreen**.

- La pantalla **ProjectsAppsScreen** nos da acceso a las aplicaciones del proyecto y su gestión: **CreateAppScreen** y **EditAppScreen**. La pantalla **ProjectsMembersScreen** no permite ver los miembros del proyecto, así como añadir más mediante la pantalla **InviteMemberScreen**.

- Desde las aplicaciones podemos acceder a la pantalla **BoardListScreen**, donde se encuentran todas las pizarras del proyecto. Esta puede navegar por las pantallas de gestión de las mismas: **CreateBoardScreen** y **EditBoardScreen**.

- Podemos ver el contenido de las pizarras en la pantallas **BoardSingleScreen**, accediendo así a sus correspondientes columnas y tareas. La gestión de las mismas también se pueden controlar desde aquí: **CreateColumnScreen**, **EditColumnScreen**, **CreateTaskScreen** y **EditTaskScreen**.

#### Friends:

- Desde **Friends** podemos gestionar todo lo relacionado con las amistades del usuario. La pantalla principal es **FriendsListScreen**, en la que podemos consultar todas las amistades así como sus perfiles navegando hasta **FriendProfileScreen**.

- Siempre que queramos podemos agregar más usuarios a nuestra lista de amigos desde la pantalla **AddFriendScreen** y chatear mediante **ChatScreen**.

#### Notifications:

- Todas las notificaciones del usuario son recogidas en la pantalla **NotificationsScreen**.

#### Profile:

- Desde **Profile** podemos consultar nuestros datos en **ProfileScreen**, así como navegar a pantallas con más información relacionada a nosotros:

  - **AchievementsScreen:** Lista de los logros del usuario junto al nivel del mismo.

  - **ActivityScreen:** Historial de actividad del usuario dentro de la aplicación.

  - **ProfileProjectsScreen:** Lista de los proyectos del usuario, desde ellos podemos acceder directamente a la pila de pantallas **Projects**.

- Los ajustes de la aplicación se encuentran en esta zona de la app, podemos navegar hasta **SettingsScreen** y realizar todos los cambios que deseemos.

#### Estilos y diseño

La versión móvil cuenta con un script con todos los estilos usados (**styles.ts**), de esta manera se consigue la reutilización y coherencia en los diferentes componentes.

La paleta de colores utilizada obtiene sus valores de los colores de **Tailwind CSS**, siguiendo así una misma paleta con todos los diferentes tonos. Los colores se componen de dos paletas principales: **lightColors** y **darkColors**; que se alternan en los ajustes según el modo que elija el usuario. Los componentes usan colores primary y secondary, los cuales usan la paleta según el modo establecido.

El diseño de la app bebe mucho de la librería de componentes **React Native Paper**, la cual es una librería de **UI multiplataform** que sigue los lineamientos del **Material Design**. Muchos de los componentes personalizados creados para la app usan esta librería.
