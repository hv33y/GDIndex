//----------------------------------------------------------------------------------------------------------------------------------
//
// Main Configurations
//

//
// Service Account
//
const serviceaccounts = [
  // Your service account(s) goes here.
  // Multiple service accounts are also supported.
  //
  /*****
  {
    "type": "service_account",
    "project_id": "BLANK",
    "private_key_id": "BLANK",
    "private_key": "BLANK",
    "client_email": "BLANK",
    "client_id": "BLANK",
    "auth_uri": "BLANK",
    "token_uri": "BLANK",
    "auth_provider_x509_cert_url": "BLANK",
    "client_x509_cert_url": "BLANK"
  }
  *****/
];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random()*serviceaccounts.length)]; // Do NOT modify this!

//
// Authentication Configurations
//
const authConfig = {
  "siteName": "Site Title",  // Site title. Set this to whatever you want and this will show up on the browser's tab.
  "siteIcon": "https://cdn.jsdelivr.net/gh/shirooo39/GDIndex@5mayrain/dist/img/favicon.ico", // The favicon. Can be whatever you want.
  // "version": "2.0.5", // Script version. Safe to edit.

  // The rclone documentation recommended to use your own client_id.
  "client_id": "",
  "client_secret": "",
  "refresh_token": "",
  // You can get the refresh_token from your rclone.conf file
  // (assuming you already have rclone set up and working).

  "service_account": false, // Set this to "true" if you want to use Service Account.
	"service_account_json": randomserviceaccount, // Do NOT modify this one!
	// Make sure you already have your SAs added into the target drive first! (be it as a Google Group or one-by-one)
	// If you enable the service_account, you can leave the refresh_token blank.

  /**************************************************
   * 
   * !! Machine Translated !!
   * 
   * Set multiple cloud drives to be displayed; add multiple by format
   * [id]: can be team drive id, subfolder id, or "root" (for personal drive root).
   * [name]: Name to be displayed
   * [user]: username of Basic Auth
   * [pass]: password for Basic Auth
   * [protect_file_link]: whether Basic Auth is used to protect file links, default value (when not set) is false, i.e. no file links are protected (for direct link download/external playback, etc.)
   * Basic Auth protects all folders/subfolder paths under the disk by default.
   * [Note] File links are not protected by default, so that it is convenient for direct link downloading/external playback;
   * If you want to protect file link, you need to set protect_file_link to true, then you need to replace the host with user:pass@host if you want to do external playback.
   * If you don't need Basic Auth, just keep user and pass empty at the same time. (Directly without setting can also be)
   * Note: The search function will not be supported for disks whose id is set to subfolder id (does not affect other disks).
   * 
   **************************************************/

   "roots": [
    /**************************************************
    * Support multiple drives / home folders (root_id).
    * 
    * You can also give value to the "pass" variable only and not the "user" variable.
    * or you can just give them both values.
    **************************************************/
    {
      id: "root_id_1", // Fill this with a drive id (personal or team drive) or a folder id.
      name: "Name 1",
      user: "", // Fill this to enable the authentication to access the site.
      pass: "", // Fill this to enable the authentication to access the site.
      protect_file_link: false // Set this to "true" to enable authentication for each urls.
    }
    /**************************************************
    {
      id: "root_id_2", // Fill this with a drive id (personal or team drive) or a folder id.
      name: "Name 2",
      user: "", // Fill this to enable the authentication to access the site.
      pass: "", // Fill this to enable the authentication to access the site.
      protect_file_link: false // Set this to "true" to enable authentication for each urls.
    },
    {
      id: "root_id_3", // Fill this with a drive id (personal or team drive) or a folder id.
      name: "Name 3",
      user: "", // Fill this to enable the authentication to access the site.
      pass: "", // Fill this to enable the authentication to access the site.
      protect_file_link: false // Set this to "true" to enable authentication for each urls.
    }
    **************************************************/
  ],

  /**************************************************
   * 
   * !! Machine Translated !!
   * 
   * The number of pages to be displayed on each page of the file list page. The recommended value is between 100 and 1000].
   * If the value set is greater than 1000, it will cause an error when requesting the drive api.
   * If the value set is too small, it will cause the file list page scrollbar incremental loading (paging loading) to fail.
   * Another function of this value is that if the number of files in the directory is larger than this setting (i.e., if multiple pages need to be displayed), the first listing of directory results will be cached.
   **************************************************/
  "files_list_page_size": 50,

  /**************************************************
   * 
   * !! Machine Translated !!
   * 
   * The number of search results pages to display per page. The recommended value is between 50 and 1000].
   * If the value set is greater than 1000, it will cause an error when requesting the drive api.
   * If the value set is too small, it will cause the search result page scroll bar incremental loading (paging loading) to fail.
   * the size of this value affects the response speed of the search operation.
   **************************************************/
  "search_result_list_page_size": 50,

  // 确认有 cors 用途的可以开启
  "enable_cors_file_down": false,

  /**************************************************
   * 
   * !! Machine Translated !!
   * 
   * The basic auth above already includes the global protection of the disk. So by default, the password in the .password file is not authenticated;
   * If you still need to authenticate some directories separately with .password files on top of global authentication, set this option to true;
   * Note: If .password file password authentication is enabled, each time a directory is listed, there will be additional overhead to check whether the .password file exists in the directory.
   **************************************************/
  "enable_password_file_verify": false
};

/**************************************************
 * 
 * Web UI Configurations
 * 
 **************************************************/
const themeConfig = {
  "url": "https://cdn.jsdelivr.net/gh/shirooo39/GDIndex@5mayrain", // Base address.
  "theme": "light", // Theme (Light | Dark).
  "main_color": "blue-grey", // Main color.
  "accent_color": "blue", // Accent color.
  "avatar": "https://cdn.jsdelivr.net/gh/shirooo39/GDIndex@5mayrain/dist/img/avatar.png", // Avatar.
  "bimg": "https://cdn.jsdelivr.net/gh/shirooo39/GDIndex@5mayrain/dist/img/cover_01.jpg", // Background image. I think it's best to use a 16:9 image for this.
  "menu_show": true, // Set this to "true" to show the Menu on the top right corner of the appbar / navbar.

  // Menu Configurations
  "menus": [
    {
      name: "Menu 1",
      url: "https://www.google.com"
    },
    {
      name: "Menu 2",
      url: "https://github.com"
    }
  ],

  // Define file previewing based on supported formats
  "view": "|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|m3u8|",

  // Video playback with DPlayer. Default is with Plyr, if not set.
  "player_dp": "|m3u8|flv|",

  // Thumbnail Configurations
  "thumbnails": [
    {
      name: "dplayer",
      url: "Thumbnail/dplayer.jpg"
    },
    {
      name: "plyr",
      url: "Thumbnail/plyr.vtt"
    }
  ],

  // Video cover, ${fileName} indicates the name of the current video
  "video_cover": "${fileName}.jpg",

  // Subtitles
  "video_subtitle": "${fileName}.vtt",
};
//
// You may not edit anything below this end of line or expect some error (unless you do know exactly what you are doing).
//
//----------------------------------------------------------------------------------------------------------------------------------

/**
 * global functions
 */
const FUNCS = {
  /**
   * 转换成针对谷歌搜索词法相对安全的搜索关键词
   */
  formatSearchKeyword: function (keyword) {
    let nothing = "";
    let space = " ";
    if (!keyword) return nothing;
    return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
      .replace(/[,，|(){}]/g, space)
      .trim()
  }

};

/**
 * global consts
 * @type {{folder_mime_type: string, default_file_fields: string, gd_root_type: {share_drive: number, user_drive: number, sub_folder: number}}}
 */
const CONSTS = new (class {
  default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
  gd_root_type = {
    user_drive: 0,
    share_drive: 1,
    sub_folder: 2
  };
  folder_mime_type = 'application/vnd.google-apps.folder';
})();


// gd instances
var gds = [];

function html(current_drive_order = 0, model = {}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <link rel="shortcut icon" href="${authConfig.siteIcon}" type="image/x-icon" />
  <style>
    @import url(${themeConfig.url}/dist/style.css);
  </style>
  <script>
    window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
    window.MODEL = JSON.parse('${JSON.stringify(model)}');
    window.current_drive_order = ${current_drive_order};
    window.ThemeConfig = JSON.parse('${JSON.stringify(themeConfig)}');
  </script>
  <script src="https://cdn.jsdelivr.net/combine/gh/jquery/jquery@3.2/dist/jquery.min.js"></script>
  <script src="${themeConfig.url}/dist/themes/${themeConfig.theme}/app.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"></script>
</head>
<body>
</body>
</html>
`;
};

const JSONWebToken = {
  header: {
      alg: 'RS256',
      typ: 'JWT'
  },
  importKey: async function(pemKey) {
      var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
      return crypto.subtle.importKey('pkcs8', pemDER, {
          name: 'RSASSA-PKCS1-v1_5',
          hash: 'SHA-256'
      }, false, ['sign']);
  },
  createSignature: async function(text, key) {
      const textBuffer = this.textUtils.stringToArrayBuffer(text);
      return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
  },
  generateGCPToken: async function(serviceAccount) {
      const iat = parseInt(Date.now() / 1000);
      var payload = {
          "iss": serviceAccount.client_email,
          "scope": "https://www.googleapis.com/auth/drive",
          "aud": "https://oauth2.googleapis.com/token",
          "exp": iat + 3600,
          "iat": iat
      };
      const encPayload = btoa(JSON.stringify(payload));
      const encHeader = btoa(JSON.stringify(this.header));
      var key = await this.importKey(serviceAccount.private_key);
      var signed = await this.createSignature(encHeader + "." + encPayload, key);
      return encHeader + "." + encPayload + "." + this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
  },
  textUtils: {
      base64ToArrayBuffer: function(base64) {
          var binary_string = atob(base64);
          var len = binary_string.length;
          var bytes = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
              bytes[i] = binary_string.charCodeAt(i);
          }
          return bytes.buffer;
      },
      stringToArrayBuffer: function(str) {
          var len = str.length;
          var bytes = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
              bytes[i] = str.charCodeAt(i);
          }
          return bytes.buffer;
      },
      arrayBufferToBase64: function(buffer) {
          let binary = '';
          let bytes = new Uint8Array(buffer);
          let len = bytes.byteLength;
          for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
          }
          return btoa(binary);
      }
  }
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  if (gds.length === 0) {
    for (let i = 0; i < authConfig.roots.length; i++) {
      const gd = new googleDrive(authConfig, i);
      await gd.init();
      gds.push(gd)
    }
    // 这个操作并行，提高效率
    let tasks = [];
    gds.forEach(gd => {
      tasks.push(gd.initRootType());
    });
    for (let task of tasks) {
      await task;
    }
  }

  // 从 path 中提取 drive order
  // 并根据 drive order 获取对应的 gd instance
  let gd;
  let url = new URL(request.url);
  let path = url.pathname;

  /**
   * 重定向至起始页
   * @returns {Response}
   */
  function redirectToIndexPage() {
    return new Response('', {status: 301, headers: {'Location': `${url.origin}/0:/`}});
  }

  if (path == '/') return redirectToIndexPage();
  if (path.toLowerCase() == '/favicon.ico') {
    // 后面可以找一个 favicon
    return new Response('', {status: 404})
  }

  // 特殊命令格式
  const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)$/g;
  const match = command_reg.exec(path);
  if (match) {
    const num = match.groups.num;
    const order = Number(num);
    if (order >= 0 && order < gds.length) {
      gd = gds[order];
    } else {
      return redirectToIndexPage()
    }
    // basic auth
    for (const r = gd.basicAuthResponse(request); r;) return r;
    const command = match.groups.command;
    // 搜索
    if (command === 'search') {
      if (request.method === 'POST') {
        // 搜索结果
        return handleSearch(request, gd);
      } else {
        const params = url.searchParams;
        // 搜索页面
        return new Response(html(gd.order, {
            q: params.get("q") || '',
            is_search_page: true,
            root_type: gd.root_type
          }),
          {
            status: 200,
            headers: {'Content-Type': 'text/html; charset=utf-8'}
          });
      }
    } else if (command === 'id2path' && request.method === 'POST') {
      return handleId2Path(request, gd)
    }
  }

  // 期望的 path 格式
  const common_reg = /^\/\d+:\/.*$/g;
  try {
    if (!path.match(common_reg)) {
      return redirectToIndexPage();
    }
    let split = path.split("/");
    let order = Number(split[1].slice(0, -1));
    if (order >= 0 && order < gds.length) {
      gd = gds[order];
    } else {
      return redirectToIndexPage()
    }
  } catch (e) {
    return redirectToIndexPage()
  }

  // basic auth
  // for (const r = gd.basicAuthResponse(request); r;) return r;
  const basic_auth_res = gd.basicAuthResponse(request);

  path = path.replace(gd.url_path_prefix, '') || '/';
  if (request.method == 'POST') {
    return basic_auth_res || apiRequest(request, gd);
  }

  let action = url.searchParams.get('a');

  if (path.substr(-1) == '/' || action != null) {
    return basic_auth_res || new Response(html(gd.order, {root_type: gd.root_type}), {
      status: 200,
      headers: {'Content-Type': 'text/html; charset=utf-8'}
    });
  } else {
    if (path.split('/').pop().toLowerCase() == ".password") {
      return basic_auth_res || new Response("", {status: 404});
    }
    let file = await gd.file(path);
    let range = request.headers.get('Range');
    const inline_down = 'true' === url.searchParams.get('inline');
    if (gd.root.protect_file_link && basic_auth_res) return basic_auth_res;
    return gd.down(file.id, range, inline_down);
  }
}


async function apiRequest(request, gd) {
  let url = new URL(request.url);
  let path = url.pathname;
  path = path.replace(gd.url_path_prefix, '') || '/';

  let option = {status: 200, headers: {'Access-Control-Allow-Origin': '*'}}

  if (path.substr(-1) == '/') {
    let form = await request.formData();
    // 这样可以提升首次列目录时的速度。缺点是，如果password验证失败，也依然会产生列目录的开销
    let deferred_list_result = gd.list(path, form.get('page_token'), Number(form.get('page_index')));

    // check .password file, if `enable_password_file_verify` is true
    if (authConfig['enable_password_file_verify']) {
      let password = await gd.password(path);
      // console.log("dir password", password);
      if (password && password.replace("\n", "") !== form.get('password')) {
        let html = `{"error": {"code": 401,"message": "password error."}}`;
        return new Response(html, option);
      }
    }

    let list_result = await deferred_list_result;
    return new Response(JSON.stringify(list_result), option);
  } else {
    let file = await gd.file(path);
    let range = request.headers.get('Range');
    return new Response(JSON.stringify(file));
  }
}

// 处理 search
async function handleSearch(request, gd) {
  const option = {status: 200, headers: {'Access-Control-Allow-Origin': '*'}};
  let form = await request.formData();
  let search_result = await
    gd.search(form.get('q') || '', form.get('page_token'), Number(form.get('page_index')));
  return new Response(JSON.stringify(search_result), option);
}

/**
 * 处理 id2path
 * @param request 需要 id 参数
 * @param gd
 * @returns {Promise<Response>} 【注意】如果从前台接收的id代表的项目不在目标gd盘下，那么response会返回给前台一个空字符串""
 */
async function handleId2Path(request, gd) {
  const option = {status: 200, headers: {'Access-Control-Allow-Origin': '*'}};
  let form = await request.formData();
  let path = await gd.findPathById(form.get('id'));
  return new Response(path || '', option);
}

class googleDrive {
  constructor(authConfig, order) {
    // 每个盘对应一个order，对应一个gd实例
    this.order = order;
    this.root = authConfig.roots[order];
    this.root.protect_file_link = this.root.protect_file_link || false;
    this.url_path_prefix = `/${order}:`;
    this.authConfig = authConfig;
    // TODO: 这些缓存的失效刷新策略，后期可以制定一下
    // path id
    this.paths = [];
    // path file
    this.files = [];
    // path pass
    this.passwords = [];
    // id <-> path
    this.id_path_cache = {};
    this.id_path_cache[this.root['id']] = '/';
    this.paths["/"] = this.root['id'];
    /*if (this.root['pass'] != "") {
      this.passwords['/'] = this.root['pass'];
    }*/
    // this.init();
  }

  /**
   * 初次授权；然后获取 user_drive_real_root_id
   * @returns {Promise<void>}
   */
  async init() {
    await this.accessToken();
    /*await (async () => {
        // 只获取1次
        if (authConfig.user_drive_real_root_id) return;
        const root_obj = await (gds[0] || this).findItemById('root');
        if (root_obj && root_obj.id) {
            authConfig.user_drive_real_root_id = root_obj.id
        }
    })();*/
    // 等待 user_drive_real_root_id ，只获取1次
    if (authConfig.user_drive_real_root_id) return;
    const root_obj = await (gds[0] || this).findItemById('root');
    if (root_obj && root_obj.id) {
      authConfig.user_drive_real_root_id = root_obj.id
    }
  }

  /**
   * 获取根目录类型，设置到 root_type
   * @returns {Promise<void>}
   */
  async initRootType() {
    const root_id = this.root['id'];
    const types = CONSTS.gd_root_type;
    if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
      this.root_type = types.user_drive;
    } else {
      const obj = await this.getShareDriveObjById(root_id);
      this.root_type = obj ? types.share_drive : types.sub_folder;
    }
  }

  /**
   * Returns a response that requires authorization, or null
   * @param request
   * @returns {Response|null}
   */
  basicAuthResponse(request) {
    const user = this.root.user || '',
      pass = this.root.pass || '',
      _401 = new Response('Unauthorized', {
        headers: {'WWW-Authenticate': `Basic realm="goindex:drive:${this.order}"`},
        status: 401
      });
    if (user || pass) {
      const auth = request.headers.get('Authorization')
      if (auth) {
        try {
          const [received_user, received_pass] = atob(auth.split(' ').pop()).split(':');
          return (received_user === user && received_pass === pass) ? null : _401;
        } catch (e) {
        }
      }
    } else return null;
    return _401;
  }

  async down(id, range = '', inline = false) {
    let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
    let requestOption = await this.requestOption();
    requestOption.headers['Range'] = range;
    let res = await fetch(url, requestOption);
    const {headers} = res = new Response(res.body, res)
    this.authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
    inline === true && headers.set('Content-Disposition', 'inline');
    return res;
  }

  async file(path) {
    if (typeof this.files[path] == 'undefined') {
      this.files[path] = await this._file(path);
    }
    return this.files[path];
  }

  async _file(path) {
    let arr = path.split('/');
    let name = arr.pop();
    name = decodeURIComponent(name).replace(/\'/g, "\\'");
    let dir = arr.join('/') + '/';
    // console.log(name, dir);
    let parent = await this.findPathId(dir);
    // console.log(parent);
    let url = 'https://www.googleapis.com/drive/v3/files';
    let params = {'includeItemsFromAllDrives': true, 'supportsAllDrives': true};
    params.q = `'${parent}' in parents and name = '${name}' and trashed = false`;
    params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink)";
    url += '?' + this.enQuery(params);
    let requestOption = await this.requestOption();
    let response = await fetch(url, requestOption);
    let obj = await response.json();
    // console.log(obj);
    return obj.files[0];
  }

  // 通过reqeust cache 来缓存
  async list(path, page_token = null, page_index = 0) {
    if (this.path_children_cache == undefined) {
      // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
      this.path_children_cache = {};
    }

    if (this.path_children_cache[path]
      && this.path_children_cache[path][page_index]
      && this.path_children_cache[path][page_index].data
    ) {
      let child_obj = this.path_children_cache[path][page_index];
      return {
        nextPageToken: child_obj.nextPageToken || null,
        curPageIndex: page_index,
        data: child_obj.data
      };
    }

    let id = await this.findPathId(path);
    let result = await this._ls(id, page_token, page_index);
    let data = result.data;
    // 对有多页的，进行缓存
    if (result.nextPageToken && data.files) {
      if (!Array.isArray(this.path_children_cache[path])) {
        this.path_children_cache[path] = []
      }
      this.path_children_cache[path][Number(result.curPageIndex)] = {
        nextPageToken: result.nextPageToken,
        data: data
      };
    }

    return result
  }


  async _ls(parent, page_token = null, page_index = 0) {
    // console.log("_ls", parent);

    if (parent == undefined) {
      return null;
    }
    let obj;
    let params = {'includeItemsFromAllDrives': true, 'supportsAllDrives': true};
    params.q = `'${parent}' in parents and trashed = false AND name !='.password'`;
    params.orderBy = 'folder,name,modifiedTime desc';
    params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
    params.pageSize = this.authConfig.files_list_page_size;

    if (page_token) {
      params.pageToken = page_token;
    }
    let url = 'https://www.googleapis.com/drive/v3/files';
    url += '?' + this.enQuery(params);
    let requestOption = await this.requestOption();
    let response = await fetch(url, requestOption);
    obj = await response.json();

    return {
      nextPageToken: obj.nextPageToken || null,
      curPageIndex: page_index,
      data: obj
    };

    /*do {
        if (pageToken) {
            params.pageToken = pageToken;
        }
        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        obj = await response.json();
        files.push(...obj.files);
        pageToken = obj.nextPageToken;
    } while (pageToken);*/

  }

  async password(path) {
    if (this.passwords[path] !== undefined) {
      return this.passwords[path];
    }

    // console.log("load", path, ".password", this.passwords[path]);

    let file = await this.file(path + '.password');
    if (file == undefined) {
      this.passwords[path] = null;
    } else {
      let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
      let requestOption = await this.requestOption();
      let response = await this.fetch200(url, requestOption);
      this.passwords[path] = await response.text();
    }

    return this.passwords[path];
  }


  /**
   * 通过 id 获取 share drive 信息
   * @param any_id
   * @returns {Promise<null|{id}|any>} 任何非正常情况都返回 null
   */
  async getShareDriveObjById(any_id) {
    if (!any_id) return null;
    if ('string' !== typeof any_id) return null;

    let url = `https://www.googleapis.com/drive/v3/drives/${any_id}`;
    let requestOption = await this.requestOption();
    let res = await fetch(url, requestOption);
    let obj = await res.json();
    if (obj && obj.id) return obj;

    return null
  }


  /**
   * 搜索
   * @returns {Promise<{data: null, nextPageToken: null, curPageIndex: number}>}
   */
  async search(origin_keyword, page_token = null, page_index = 0) {
    const types = CONSTS.gd_root_type;
    const is_user_drive = this.root_type === types.user_drive;
    const is_share_drive = this.root_type === types.share_drive;

    const empty_result = {
      nextPageToken: null,
      curPageIndex: page_index,
      data: null
    };

    if (!is_user_drive && !is_share_drive) {
      return empty_result;
    }
    let keyword = FUNCS.formatSearchKeyword(origin_keyword);
    if (!keyword) {
      // 关键词为空，返回
      return empty_result;
    }
    let words = keyword.split(/\s+/);
    let name_search_str = `name contains '${words.join("' AND name contains '")}'`;

    // corpora 为 user 是个人盘 ，为 drive 是团队盘。配合 driveId
    let params = {};
    if (is_user_drive) {
      params.corpora = 'user'
    }
    if (is_share_drive) {
      params.corpora = 'drive';
      params.driveId = this.root.id;
      // This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
      params.includeItemsFromAllDrives = true;
      params.supportsAllDrives = true;
    }
    if (page_token) {
      params.pageToken = page_token;
    }
    params.q = `trashed = false AND name !='.password' AND (${name_search_str})`;
    params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
    params.pageSize = this.authConfig.search_result_list_page_size;
    // params.orderBy = 'folder,name,modifiedTime desc';

    let url = 'https://www.googleapis.com/drive/v3/files';
    url += '?' + this.enQuery(params);
    // console.log(params)
    let requestOption = await this.requestOption();
    let response = await fetch(url, requestOption);
    let res_obj = await response.json();

    return {
      nextPageToken: res_obj.nextPageToken || null,
      curPageIndex: page_index,
      data: res_obj
    };
  }


  /**
   * 一层一层的向上获取这个文件或文件夹的上级文件夹的 file 对象。注意：会很慢！！！
   * 最多向上寻找到当前 gd 对象的根目录 (root id)
   * 只考虑一条单独的向上链。
   * 【注意】如果此id代表的项目不在目标gd盘下，那么此函数会返回null
   *
   * @param child_id
   * @param contain_myself
   * @returns {Promise<[]>}
   */
  async findParentFilesRecursion(child_id, contain_myself = true) {
    const gd = this;
    const gd_root_id = gd.root.id;
    const user_drive_real_root_id = authConfig.user_drive_real_root_id;
    const is_user_drive = gd.root_type === CONSTS.gd_root_type.user_drive;

    // 自下向上查询的终点目标id
    const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
    const fields = CONSTS.default_file_fields;

    // [{},{},...]
    const parent_files = [];
    let meet_top = false;

    async function addItsFirstParent(file_obj) {
      if (!file_obj) return;
      if (!file_obj.parents) return;
      if (file_obj.parents.length < 1) return;

      // ['','',...]
      let p_ids = file_obj.parents;
      if (p_ids && p_ids.length > 0) {
        // its first parent
        const first_p_id = p_ids[0];
        if (first_p_id === target_top_id) {
          meet_top = true;
          return;
        }
        const p_file_obj = await gd.findItemById(first_p_id);
        if (p_file_obj && p_file_obj.id) {
          parent_files.push(p_file_obj);
          await addItsFirstParent(p_file_obj);
        }
      }
    }

    const child_obj = await gd.findItemById(child_id);
    if (contain_myself) {
      parent_files.push(child_obj);
    }
    await addItsFirstParent(child_obj);

    return meet_top ? parent_files : null
  }

  /**
   * 获取相对于本盘根目录的path
   * @param child_id
   * @returns {Promise<string>} 【注意】如果此id代表的项目不在目标gd盘下，那么此方法会返回空字符串""
   */
  async findPathById(child_id) {
    if (this.id_path_cache[child_id]) {
      return this.id_path_cache[child_id];
    }

    const p_files = await this.findParentFilesRecursion(child_id);
    if (!p_files || p_files.length < 1) return '';

    let cache = [];
    // 把查出来的每一级的path和id都缓存一下
    p_files.forEach((value, idx) => {
      const is_folder = idx === 0 ? (p_files[idx].mimeType === CONSTS.folder_mime_type) : true;
      let path = '/' + p_files.slice(idx).map(it => it.name).reverse().join('/');
      if (is_folder) path += '/';
      cache.push({id: p_files[idx].id, path: path})
    });

    cache.forEach((obj) => {
      this.id_path_cache[obj.id] = obj.path;
      this.paths[obj.path] = obj.id
    });

    /*const is_folder = p_files[0].mimeType === CONSTS.folder_mime_type;
    let path = '/' + p_files.map(it => it.name).reverse().join('/');
    if (is_folder) path += '/';*/

    return cache[0].path;
  }


  // 根据id获取file item
  async findItemById(id) {
    const is_user_drive = this.root_type === CONSTS.gd_root_type.user_drive;
    let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${CONSTS.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
    let requestOption = await this.requestOption();
    let res = await fetch(url, requestOption);
    return await res.json()
  }

  async findPathId(path) {
    let c_path = '/';
    let c_id = this.paths[c_path];

    let arr = path.trim('/').split('/');
    for (let name of arr) {
      c_path += name + '/';

      if (typeof this.paths[c_path] == 'undefined') {
        let id = await this._findDirId(c_id, name);
        this.paths[c_path] = id;
      }

      c_id = this.paths[c_path];
      if (c_id == undefined || c_id == null) {
        break;
      }
    }
    // console.log(this.paths);
    return this.paths[path];
  }

  async _findDirId(parent, name) {
    name = decodeURIComponent(name).replace(/\'/g, "\\'");

    // console.log("_findDirId", parent, name);

    if (parent == undefined) {
      return null;
    }

    let url = 'https://www.googleapis.com/drive/v3/files';
    let params = {'includeItemsFromAllDrives': true, 'supportsAllDrives': true};
    params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
    params.fields = "nextPageToken, files(id, name, mimeType)";
    url += '?' + this.enQuery(params);
    let requestOption = await this.requestOption();
    let response = await fetch(url, requestOption);
    let obj = await response.json();
    if (obj.files[0] == undefined) {
      return null;
    }
    return obj.files[0].id;
  }

  async accessToken() {
    console.log("accessToken");
    if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
      const obj = await this.fetchAccessToken();
      if (obj.access_token != undefined) {
        this.authConfig.accessToken = obj.access_token;
        this.authConfig.expires = Date.now() + 3500 * 1000;
      }
    }
    return this.authConfig.accessToken;
  }

  async fetchAccessToken() {
    console.log("fetchAccessToken");
    const url = "https://www.googleapis.com/oauth2/v4/token";
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    var post_data;
    if (this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined") {
        const jwttoken = await JSONWebToken.generateGCPToken(this.authConfig.service_account_json);
        post_data = {
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwttoken,
        };
    } else {
        post_data = {
            client_id: this.authConfig.client_id,
            client_secret: this.authConfig.client_secret,
            refresh_token: this.authConfig.refresh_token,
            grant_type: "refresh_token",
        };
    }

    let requestOption = {
      'method': 'POST',
      'headers': headers,
      'body': this.enQuery(post_data)
    };

    const response = await fetch(url, requestOption);
    return await response.json();
  }

  async fetch200(url, requestOption) {
    let response;
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      console.log(response.status);
      if (response.status != 403) {
        break;
      }
      await this.sleep(800 * (i + 1));
    }
    return response;
  }

  async requestOption(headers = {}, method = 'GET') {
    const accessToken = await this.accessToken();
    headers['authorization'] = 'Bearer ' + accessToken;
    return {'method': method, 'headers': headers};
  }

  enQuery(data) {
    const ret = [];
    for (let d in data) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
  }

  sleep(ms) {
    return new Promise(function (resolve, reject) {
      let i = 0;
      setTimeout(function () {
        console.log('sleep' + ms);
        i++;
        if (i >= 2) reject(new Error('i>=2'));
        else resolve(i);
      }, ms);
    })
  }
}

String.prototype.trim = function (char) {
  if (char) {
    return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
  }
  return this.replace(/^\s+|\s+$/g, '');
};