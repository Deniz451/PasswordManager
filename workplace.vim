let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Desktop/DenisResitko/projects/password_manager/v5/app
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +32 ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/NewVaultScreen.tsx
badd +0 term://~/Desktop/DenisResitko/projects/password_manager/v5/app//18660:C:/Windows/system32/cmd.exe
badd +1 term://~/Desktop/DenisResitko/projects/password_manager/v5/app//9884:C:/Windows/system32/cmd.exe
badd +0 term://~/Desktop/DenisResitko/projects/password_manager/v5/app//14948:C:/Windows/system32/cmd.exe
badd +10 ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/VaultsScreen.tsx
badd +27 context/VaultContext.ts
argglobal
%argdel
edit ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/VaultsScreen.tsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 97 + 128) / 256)
exe 'vert 2resize ' . ((&columns * 85 + 128) / 256)
exe '3resize ' . ((&lines * 29 + 34) / 68)
exe 'vert 3resize ' . ((&columns * 72 + 128) / 256)
exe '4resize ' . ((&lines * 29 + 34) / 68)
exe 'vert 4resize ' . ((&columns * 72 + 128) / 256)
argglobal
balt context/VaultContext.ts
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 52 - ((51 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 52
normal! 03|
wincmd w
argglobal
if bufexists(fnamemodify("~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/NewVaultScreen.tsx", ":p")) | buffer ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/NewVaultScreen.tsx | else | edit ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/NewVaultScreen.tsx | endif
if &buftype ==# 'terminal'
  silent file ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/NewVaultScreen.tsx
endif
balt ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/VaultsScreen.tsx
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 32 - ((31 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 32
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("term://~/Desktop/DenisResitko/projects/password_manager/v5/app//14948:C:/Windows/system32/cmd.exe", ":p")) | buffer term://~/Desktop/DenisResitko/projects/password_manager/v5/app//14948:C:/Windows/system32/cmd.exe | else | edit term://~/Desktop/DenisResitko/projects/password_manager/v5/app//14948:C:/Windows/system32/cmd.exe | endif
if &buftype ==# 'terminal'
  silent file term://~/Desktop/DenisResitko/projects/password_manager/v5/app//14948:C:/Windows/system32/cmd.exe
endif
balt term://~/Desktop/DenisResitko/projects/password_manager/v5/app//9884:C:/Windows/system32/cmd.exe
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 18 - ((7 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("term://~/Desktop/DenisResitko/projects/password_manager/v5/app//9884:C:/Windows/system32/cmd.exe", ":p")) | buffer term://~/Desktop/DenisResitko/projects/password_manager/v5/app//9884:C:/Windows/system32/cmd.exe | else | edit term://~/Desktop/DenisResitko/projects/password_manager/v5/app//9884:C:/Windows/system32/cmd.exe | endif
if &buftype ==# 'terminal'
  silent file term://~/Desktop/DenisResitko/projects/password_manager/v5/app//9884:C:/Windows/system32/cmd.exe
endif
balt ~/Desktop/DenisResitko/projects/password_manager/v5/app/screens/NewVaultScreen.tsx
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 6 - ((5 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 0
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 97 + 128) / 256)
exe 'vert 2resize ' . ((&columns * 85 + 128) / 256)
exe '3resize ' . ((&lines * 29 + 34) / 68)
exe 'vert 3resize ' . ((&columns * 72 + 128) / 256)
exe '4resize ' . ((&lines * 29 + 34) / 68)
exe 'vert 4resize ' . ((&columns * 72 + 128) / 256)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
