import { ICategory } from "../interfaces/Catagory";
import { IPost } from "../interfaces/Post";

export const CategoryTestData: ICategory[] = [
  {
    name: "General discussion",
    description:
      "Discuss about anything rhythm game related that doesn't belong to other categories",
    postCount: 8163,
    popularTags: ["Votes", "Arcaea"],
    colour: "primary.main",
  },
  {
    name: "Question",
    description: "Post your rhythm game question here",
    postCount: 293,
    popularTags: [],
    colour: "secondary.main",
  },
  {
    name: "Meme",
    description: "MEMES, MEMES, AND MORE MEMES",
    postCount: 42069,
    popularTags: ["meme"],
    colour: "warning.main",
  },
  {
    name: "Achievements",
    description: "Proud of something? Share it here to everyone",
    postCount: 1542,
    popularTags: ["Upscore", "Full combo", "All perfect", "Unlocks"],
    colour: "success.main",
  },
];

export const TestPosts: IPost[] = [
  {
    author: "Anon",
    title: "Test thing",
    content: "test",
    postId: "jioasfhg",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 100,
    viewCount: 200,
  },
  {
    author: "Huyen",
    title: "First post?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit. Mattis nunc sed blandit libero volutpat. Sem integer vitae justo eget magna fermentum iaculis eu non. At urna condimentum mattis pellentesque id. Turpis egestas maecenas pharetra convallis posuere morbi leo. Fermentum posuere urna nec tincidunt praesent semper feugiat. Arcu cursus vitae congue mauris. Orci ac auctor augue mauris. Ut sem viverra aliquet eget sit. Volutpat consequat mauris nunc congue nisi vitae suscipit. Congue nisi vitae suscipit tellus mauris. Ultrices tincidunt arcu non sodales neque sodales ut. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Ultrices in iaculis nunc sed. Sit amet tellus cras adipiscing. Risus viverra adipiscing at in tellus. Orci nulla pellentesque dignissim enim sit. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Purus non enim praesent elementum facilisis leo vel.\nEt malesuada fames ac turpis egestas integer. Arcu bibendum at varius vel pharetra vel turpis nunc. Amet est placerat in egestas. Facilisis magna etiam tempor orci eu lobortis. Massa massa ultricies mi quis hendrerit. Aliquam ut porttitor leo a diam. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Egestas maecenas pharetra convallis posuere morbi leo. Ut eu sem integer vitae justo eget. Massa id neque aliquam vestibulum. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.\nRisus quis varius quam quisque id diam. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Duis ultricies lacus sed turpis tincidunt id aliquet. Tempor nec feugiat nisl pretium fusce. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Fusce id velit ut tortor pretium viverra. Pellentesque id nibh tortor id aliquet lectus proin. Enim facilisis gravida neque convallis a cras semper auctor neque. Nunc sed augue lacus viverra vitae congue. Consectetur adipiscing elit duis tristique sollicitudin. Senectus et netus et malesuada fames ac turpis egestas integer. Sodales ut etiam sit amet nisl purus in mollis. Sed faucibus turpis in eu mi bibendum neque egestas. Fringilla est ullamcorper eget nulla facilisi. A iaculis at erat pellentesque. Pellentesque elit eget gravida cum sociis natoque.\nViverra vitae congue eu consequat ac felis donec et odio. Mollis aliquam ut porttitor leo a. Quis commodo odio aenean sed adipiscing diam donec. Sed tempus urna et pharetra pharetra massa massa ultricies. Quis hendrerit dolor magna eget est lorem. Mauris cursus mattis molestie a iaculis. Senectus et netus et malesuada fames ac. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Pulvinar mattis nunc sed blandit libero volutpat. Aliquet nibh praesent tristique magna sit amet purus. Lectus mauris ultrices eros in cursus turpis massa. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Viverra orci sagittis eu volutpat odio facilisis mauris. Pellentesque diam volutpat commodo sed egestas egestas. Felis imperdiet proin fermentum leo vel orci porta non.\nGravida dictum fusce ut placerat orci. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Consectetur purus ut faucibus pulvinar elementum. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Integer quis auctor elit sed vulputate mi. Mauris augue neque gravida in fermentum et sollicitudin. Euismod nisi porta lorem mollis aliquam ut. Quis viverra nibh cras pulvinar. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Risus pretium quam vulputate dignissim suspendisse in est. Et malesuada fames ac turpis egestas. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Dignissim enim sit amet venenatis urna cursus eget nunc. Malesuada bibendum arcu vitae elementum curabitur. Fermentum dui faucibus in ornare quam viverra.",
    postId: "id",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 1000,
    viewCount: -420,
  },
  {
    author: "Anon",
    title: "test",
    content:
      "# Welcome to StackEdit!  \nHi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.   \n# Files\n  StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**  \n## Create files and folders\nThe file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.\n## Switch to another file\nAll your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.\n\n## Rename a file\nYou can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.  \n## Delete a file\nYou can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.  \n## Export a file\nYou can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.   \n# Synchronization\nSynchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.\nThere are two types of synchronization and they can complement each other:\n- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device. 	> To start syncing your workspace, just sign in with Google in the menu.\n- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**. 	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.",
    postId: "waoooo",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 100,
    viewCount: 200,
  },
];
