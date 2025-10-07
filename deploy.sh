mkdir -p .vercel/output
rm -rf .vercel/output/static
cp -r dist .vercel/output/static
echo '{ "version": 3 }' > .vercel/output/config.json
vercel deploy --prebuilt
