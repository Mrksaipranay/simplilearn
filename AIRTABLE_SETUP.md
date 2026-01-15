# 🔧 AIRTABLE SETUP GUIDE

Complete step-by-step instructions to set up Airtable for the Simplilearn Landing Page RSVP form.

---

## 📋 PREREQUISITES

- An Airtable account (free tier is sufficient)
- Valid Airtable credentials
- ~5 minutes to complete setup

**Sign up**: https://airtable.com (if you don't have an account)

---

## ✅ STEP 1: CREATE A PERSONAL ACCESS TOKEN

This is the API key your application will use to connect to Airtable.

### 1.1 Go to Token Management
1. Visit: https://airtable.com/create/tokens
2. Sign in with your Airtable account
3. You'll see the "Create new token" button

### 1.2 Create Token
1. Click **"Create token"**
2. Give it a name: `Simplilearn Landing Page`
3. Select **Scopes** - Add these permissions:
   - ✅ `data.records:read` - Read records
   - ✅ `data.records:write` - Write records (for form submissions)

4. Select **Access Scope** - Choose:
   - ✅ Select the specific bases your token should access

5. **Save Token** in a secure location (you can only see it once!)
   - Copy the full token string
   - Example: `patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

**Store this safely** - you'll need it in Step 3.

---

## ✅ STEP 2: CREATE A BASE & TABLE

This is where your RSVP data will be stored.

### 2.1 Create New Base
1. Go to: https://airtable.com/bases
2. Click **"Add a base"**
3. Name it: `Simplilearn Events`
4. Choose a workspace
5. Click **"Create base"**

### 2.2 Create Table
Inside your new base:

1. Click **"Add a table"** (or create from scratch)
2. Name it: `RSVPs`
3. Keep the default `ID` field

### 2.3 Add Fields to Your Table

The form will submit email addresses. Your table should have:

**Field 1: Email** (Primary Field)
- Field name: `Email`
- Field type: **Single line text**
- ✅ Make it the primary field
- Mark as **Required** (optional but recommended)

**Field 2: Timestamp** (Optional but useful)
- Field name: `Timestamp`
- Field type: **Created time** or **Date**
- Auto-populates when record is created
- Helps track when RSVPs came in

**Field 3: Name** (Optional)
- Field name: `Name`
- Field type: **Single line text**
- Currently not used by the form, but useful for your records

**Field 4: Status** (Optional)
- Field name: `Status`
- Field type: **Single select**
- Options: `Pending`, `Confirmed`, `Attended`
- Helps you manage registrations

**Your table should look like:**
```
ID  | Email         | Timestamp  | Name | Status
----|---------------|-----------|------|--------
1   | test@test.com | 1/15/2026 | ...  | Pending
```

---

## ✅ STEP 3: GET YOUR BASE ID

This is the identifier for your Airtable base.

### 3.1 Find Base ID
1. Open your base: https://airtable.com/bases
2. Select your `Simplilearn Events` base
3. Look at the URL in your browser
4. Example: `https://airtable.com/app**XXXXXXXXXXXXX**/tblXXXXXXXXXXXXXX`
5. Copy the part: `app**XXXXXXXXXXXXX**` (the base ID starts with "app")

**Store this** - you'll need it in Step 4.

---

## ✅ STEP 4: ADD ENVIRONMENT VARIABLES

Configure your application to use Airtable.

### 4.1 Update .env.local File

In your project root, edit `.env.local`:

```env
# Airtable Configuration
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=RSVPs
```

Replace:
- `AIRTABLE_API_KEY` → Your Personal Access Token from Step 1
- `AIRTABLE_BASE_ID` → Your Base ID from Step 3
- `AIRTABLE_TABLE_NAME` → Your table name (default: `RSVPs`)

### 4.2 Verify File Structure
```
simplilearn/
├── .env.local          ← Add variables here
├── .env.example        ← Template (for reference)
└── ...
```

**Important**: `.env.local` is in `.gitignore` - your credentials are safe and won't be committed.

---

## ✅ STEP 5: TEST LOCALLY

Verify everything works before deployment.

### 5.1 Run Development Server
```bash
npm install
npm run dev
```

### 5.2 Test the Form
1. Open http://localhost:3000
2. Scroll to RSVP form
3. Enter a test email: `test@example.com`
4. Click "RSVP Now"
5. You should see: **"Thank you! Your RSVP has been received."**

### 5.3 Verify in Airtable
1. Go to your Airtable base
2. Open the `RSVPs` table
3. You should see a new record with your test email
4. **Success!** ✅

---

## ✅ STEP 6: DEPLOY TO VERCEL

Configure production environment variables.

### 6.1 Add to Vercel Dashboard

1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Add three variables:
   - `AIRTABLE_API_KEY` = Your Personal Access Token
   - `AIRTABLE_BASE_ID` = Your Base ID
   - `AIRTABLE_TABLE_NAME` = `RSVPs`

4. Click **Save**

### 6.2 Redeploy
1. Click **Deployments**
2. Find latest deployment
3. Click the three dots **...**
4. Select **Redeploy**
5. Wait for deployment to complete

### 6.3 Test Production
1. Visit your live URL
2. Submit a test email
3. Verify it appears in your Airtable base

---

## 🔐 SECURITY CHECKLIST

- [x] API key NOT in `.env.example` (template only)
- [x] API key NOT in git commits (`.env.local` is ignored)
- [x] API key safely stored in Vercel dashboard
- [x] Token has minimal scopes (read + write only)
- [x] Token can only access your specific base
- [x] Environment variables used via `process.env`

---

## 🆘 TROUBLESHOOTING

### Issue: "Could not establish connection"
**Solution**: 
- Verify `AIRTABLE_API_KEY` is correct (no extra spaces)
- Verify token hasn't expired
- Check token has `data.records:write` scope

### Issue: "Table 'RSVPs' not found"
**Solution**:
- Verify table name matches exactly (case-sensitive)
- Check `AIRTABLE_TABLE_NAME` in `.env.local`
- Verify table exists in your Airtable base

### Issue: "Receiving end does not exist"
**Solution** (Chrome extension issue):
- This is normal in development (React DevTools trying to connect)
- Won't appear in production
- Doesn't affect functionality

### Issue: Email not appearing in Airtable
**Solution**:
- Check browser console for errors
- Verify API key has `data.records:write` scope
- Check Vercel deployment logs
- Try with a different email

### Issue: "Authentication failed"
**Solution**:
- Regenerate Personal Access Token
- Update all environment variables
- Redeploy to Vercel

---

## 📊 EXAMPLE TABLE STRUCTURE

Your Airtable base should look like:

```
Base Name: Simplilearn Events
├── Table: RSVPs
    ├── Field: ID (Auto)
    ├── Field: Email (Single line text, Required, Primary)
    ├── Field: Timestamp (Created time)
    ├── Field: Name (Single line text)
    └── Field: Status (Single select: Pending, Confirmed, Attended)
```

---

## 📈 MONITOR YOUR RSVPs

Once live, you can:

1. **View all RSVPs**
   - Open your Airtable base
   - Check the `RSVPs` table
   - See all submissions in real-time

2. **Export Data**
   - Select records
   - Download as CSV/JSON
   - Use in email or CRM

3. **Set Reminders**
   - Click on records
   - Add dates/reminders
   - Track confirmations

4. **Create Forms**
   - Airtable has native forms
   - But your web form is better for your design

---

## 🎯 QUICK REFERENCE

| Item | Value | Where |
|------|-------|-------|
| API Key | `pat...` | [Create here](https://airtable.com/create/tokens) |
| Base ID | `app...` | In base URL |
| Table Name | `RSVPs` | In your base |
| Scopes | read + write | Token settings |
| Env Variable 1 | `AIRTABLE_API_KEY` | .env.local |
| Env Variable 2 | `AIRTABLE_BASE_ID` | .env.local |
| Env Variable 3 | `AIRTABLE_TABLE_NAME` | .env.local |

---

## ✅ COMPLETION CHECKLIST

- [ ] Created Personal Access Token
- [ ] Copied API key to safe location
- [ ] Created Airtable base `Simplilearn Events`
- [ ] Created `RSVPs` table with fields
- [ ] Found Base ID (`app...`)
- [ ] Updated `.env.local` with all variables
- [ ] Tested locally with `npm run dev`
- [ ] Verified email appeared in Airtable
- [ ] Added variables to Vercel
- [ ] Tested on production URL
- [ ] Verified security (no secrets exposed)

---

## 📞 HELP & RESOURCES

- **Airtable API Docs**: https://airtable.com/api
- **Personal Access Tokens**: https://airtable.com/create/tokens
- **Create Base**: https://airtable.com/bases
- **Vercel Env Variables**: https://vercel.com/docs/projects/environment-variables

---

**Status**: Ready to set up! Follow these steps and your RSVP form will be live. ✅

**Time Estimate**: 5-10 minutes  
**Difficulty**: Easy  
**Technical Knowledge Required**: Minimal
