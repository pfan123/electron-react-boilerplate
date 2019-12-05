const { Menu, MenuItem } = require('electron')
const menu = new Menu()

menu.append(new MenuItem({
  label: 'Print',
  accelerator: 'CmdOrCtrl+P',
  click () { console.log('time to print stuff') },
  submenu: [
    {
      label: 'Open File',
      accelerator: 'CmdOrCtrl+O',
      click () {
        console.log('Open File')
      }
    }
  ]
}))
