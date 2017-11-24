PANDOC_OPT = \
	--latex-engine=lualatex \
	-V documentclass=bxjsbook \
	-V mainfont=Noto\ Sans\ CJK\ JP \
	-V title=プログラミング講習資料 \
	-V classoption=pandoc \
	-V papersize=a5 \
	-V fontsize=8pt \
	--toc \
	--toc-depth=2 \
	--number-sections \
	--listings \
	--top-level-division=chapter

MD = content/1.md \
content/2.md \
content/3.md \
content/4.md \
content/5.md

.PHONY: all
all: clang-course.pdf

clang-course.pdf: $(MD)
	pandoc -f markdown $(MD) -o $@ $(PANDOC_OPT)